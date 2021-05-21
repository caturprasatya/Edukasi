'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = require('../class12.json')

    data.forEach(question => {
      question.createdAt = new Date()
      question.updatedAt = new Date()
    });
    
    await queryInterface.bulkInsert('Exams', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Exams', null, {});
     
  }
};
