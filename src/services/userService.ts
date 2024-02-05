import User from "../../db/models/User";

class UserService {
  static async getAllUsers() {
    return User.findAll();
  }

  static async createUser(user: any) {
    return User.create(user);
  }

  static async getUserByEmail(email: string): Promise<any | null> {
    try {
      // Use Sequelize or your preferred method to find the user by email
      const user = await User.findOne({
        where: { email },
      });

      return user || null;
    } catch (error) {
      console.error("Error getting user by email:", error);
      throw error;
    }
  }
}

export default UserService;
