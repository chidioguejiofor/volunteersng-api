'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Organizations',
      [
        {
          id: '546c692b-0cd5-4cea-b391-2a481c8c1975',
          name: 'Nike',
          email: 'nike-admin@nike.com',
          logoURL: 'some-url',
          foundedIn: '1984-09-01',
          industry: 'Sports',
          description: 'Sale of sports gear',
          contactPhone: '0890990099',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Organizations', null, {});
  },
};
