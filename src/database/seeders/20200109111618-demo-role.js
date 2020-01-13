'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Roles',
      [
        {
          id: 'fce4fff4-4cb5-4281-b244-3b51afb25445',
          name: 'Super Admin',
          description: 'The boss himself',
        },
        {
          id: 'e4af43af-ca38-426b-a8ec-65a52a5a45fc',
          name: 'Admin',
          description: 'The normal one',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  },
};
