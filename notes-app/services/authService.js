import { account } from "./appwrite";
import { ID } from "react-native-appwrite";

const authService = {
  // Register a user
  async register(email, password) {
    try {
      const response = await account.create(ID.unique(), email, password);
      return response;
    } catch (error) {
      return {
        error: error.message || "Registration failed. PLease try again",
      };
    }
  },

  // Login a user
  async login(email, password) {
    try {
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      return response;
    } catch (error) {
      return {
        error: error.message || "Login failed. PLease check your credentials",
      };
    }
  },
  // Get logged in user
  async getUser() {
    try {
      return await account.get();
    } catch (error) {
      return null;
    }
  },
  // Logout user
  async logout() {
    try {
      await account.deleteSession("current");
    } catch (error) {
      return {
        error: error.message || "Logout failed. PLease try again",
      };
    }
  },
};

export default authService;
