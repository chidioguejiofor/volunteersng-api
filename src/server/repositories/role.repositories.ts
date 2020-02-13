import db from '../../database/models/index.js';

const { Role } = db;

export default class RoleRepository {
  static async getRole(name: string) {
    return await Role.findOne({ where: { name: name.toLowerCase() } });
  }
}
