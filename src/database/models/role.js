'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      name: DataTypes.ENUM('owner', 'manager', 'super admin', 'admin', 'volunteer'),
      description: DataTypes.TEXT,
    },
    {},
  );
  Role.associate = function(models) {
    // associations can be defined here
    Role.belongsToMany(models.User, { through: 'Membership', foreignKey: 'roleId' });
    Role.belongsToMany(models.Organization, { through: 'Membership', foreignKey: 'roleId' });
  };
  return Role;
};
