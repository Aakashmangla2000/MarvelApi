import User from "../../db/models/User";

class UserService {
  static async getAllUsers() {
    return User.findAll({ attributes: ["id", "email", "phoneNumber"] });
  }

  static async createUser(user: any) {
    return User.create(user);
  }

  static async getUserByEmail(email: string): Promise<any | null> {
    try {
      const user = await User.findOne({
        where: { email },
        attributes: ["id", "password", "email", "phoneNumber"],
      });

      return user || null;
    } catch (error) {
      console.error("Error getting user by email:", error);
      throw error;
    }
  }

  static async getUserByPhone(phoneNumber: string): Promise<any | null> {
    try {
      const user = await User.findOne({
        where: { phoneNumber },
        attributes: ["id", "password", "email", "phoneNumber"],
      });

      return user || null;
    } catch (error) {
      console.error("Error getting user by phone number:", error);
      throw error;
    }
  }
}

export default UserService;
