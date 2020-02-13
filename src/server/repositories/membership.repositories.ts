import db from '../../database/models/index.js';

const { Membership } = db;

interface Membership {
  userId: string;
  orgId: string;
  roleId: string;
}

export default class MembershipRepository {
  static async createMembership(data: Membership) {
    return await Membership.create(data);
  }
}
