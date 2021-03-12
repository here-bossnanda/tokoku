'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
        name: 'Asus ROG',
        price: 5000000,
        stock: 10,
        imageUrl: 'https://d2pa5gi5n2e1an.cloudfront.net/id/images/article/12523_TH/3.jpg',
        description: 'ASUS ROG Zephyrus Duo 15, Laptop Dual Layar yang Siap Puaskan Dahaga Gamer Dan Konten Kreator Profesional',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Macbook',
        price: 4000000,
        stock: 8,
        imageUrl: 'https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-13..1588802180.jpg',
        description: 'Apple MacBook Pro 13-Inch (2020)',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};