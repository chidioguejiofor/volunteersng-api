'use strict';
module.exports = (sequelize, DataTypes) => {
  const Membership = sequelize.define('Membership', {
    userId: DataTypes.UUID,
    orgId: DataTypes.UUID,
    roleId: DataTypes.UUID
  }, {});
  Membership.associate = function(models) {
    // associations can be defined here
  };
  return Membership;
};