'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Memberships',
      [
        {
          userId: 'cb1c0b31-72d3-4c51-94d0-901bc2dfb613',
          roleId: 'fce4fff4-4cb5-4281-b244-3b51afb25445',
        },
        {
          userId: '40b6c719-68b2-4097-95ea-6fe230784e29',
          orgId: '546c692b-0cd5-4cea-b391-2a481c8c1975',
          roleId: 'e4af43af-ca38-426b-a8ec-65a52a5a45fc',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Memberships', null, {});
  },
};
