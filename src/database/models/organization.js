'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define(
    'Organization',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      logoURL: DataTypes.STRING,
      foundedIn: DataTypes.DATEONLY,
      industry: DataTypes.STRING,
      description: DataTypes.TEXT,
      contactPhone: DataTypes.STRING,
    },
    {},
  );
  Organization.associate = function(models) {
    // associations can be defined here
    Organization.belongsToMany(models.User, { through: 'Membership', foreignKey: 'orgId' });
  };
  return Organization;
};
