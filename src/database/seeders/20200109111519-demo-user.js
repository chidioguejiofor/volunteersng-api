'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 'cb1c0b31-72d3-4c51-94d0-901bc2dfb613',
          name: 'Super Mario',
          email: 'super.mario@vol-ng.com',
          username: 'super-mario',
          password: 'pass',
          verified: true,
        },
        {
          id: '40b6c719-68b2-4097-95ea-6fe230784e29',
          name: 'John Doe',
          email: 'john.doe@gmail.com',
          username: 'john-doe',
          password: 'pass',
          verified: false,
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
