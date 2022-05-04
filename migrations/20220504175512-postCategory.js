'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      id: {
        types: Sequelize.INTEGER,
        references: { model: 'BlogPots', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      categoryId: {
        type:Sequelize.INTEGER,
        references: { model: 'Categories', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};
