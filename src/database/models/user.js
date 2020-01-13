'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      verified: DataTypes.BOOLEAN,
    },
    {},
  );
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Organization, { through: 'Membership' });
    User.belongsToMany(models.Role, { through: 'Membership' });
  };
  return User;
};
