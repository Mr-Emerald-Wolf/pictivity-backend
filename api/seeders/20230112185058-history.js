'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Histories', [{
      chain: "polygon",
      name: "Sample NFT",
      thash: "0xf1c1ee1b1f1330131ad8c6d3e013abbc54bc1744ccf86295958198a606944e5a",
      description: "Build with NFTPort!",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
