import db from '../../database/models/index.js';

const { Role } = db;

interface Role {
  name: string;
  description: string;
}

export default class RoleRepository {
  static async createRole(data: Role) {
    return await Role.create(data);
  }
}
