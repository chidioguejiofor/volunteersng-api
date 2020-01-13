'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      name: DataTypes.ENUM('Owner', 'Manager', 'Super Admin', 'Admin', 'Volunteer'),
      description: DataTypes.TEXT,
    },
    {},
  );
  Role.associate = function(models) {
    // associations can be defined here
    Role.belongsToMany(models.User, { through: 'Membership' });
    Role.belongsToMany(models.Organization, { through: 'Membership' });
  };
  return Role;
};
