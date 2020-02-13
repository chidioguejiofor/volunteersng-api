import db from '../../database/models/index.js';

const { User } = db;

interface User {
  name: string;
  email: string;
  username: string;
  password: string;
}
export default class UserRepository {
  public static async getUserById(id: string) {
    return await User.findOne({ where: { id } });
  }
  public static async getUser(email: string) {
    return await User.findOne({ where: { email } });
  }

  public static async createUser(data: User) {
    return await User.create(data);
  }
}
