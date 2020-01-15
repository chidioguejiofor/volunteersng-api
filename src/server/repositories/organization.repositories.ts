import db from '../../database/models/index.js';
import { Op } from 'sequelize';

const { Organization } = db;

interface Organization {
  name: string;
  email: string;
  logoURL: string;
  foundedIn: string;
  industry: string;
  description: string;
  contactPhone: string;
}

export default class OrganizationRepository {
  static async getOrganization({ email, name }) {
    return await Organization.findOne({ where: { [Op.or]: [{ email }, { name }] } });
  }

  static async createOrganization(data: Organization) {
    return await Organization.create(data);
  }
}
