const { User } = require('../models');

const userData = [
  {
    "username": "flowerpower88",
    "password": "password123",
    "email": "flowerpower88@gmail.com"
  },
  {
    "username": "roses_are_red",
    "password": "password123",
    "email": "redroses@gmail.com"
  },
  {
    "username": "greenthumb",
    "password": "password123",
    "email": "greenthumb@gmail.com"
  },
  {
    "username": "4leafclover",
    "password": "password123",
    "email": "4leafclover@gmail.com"
  },
  {
    "username": "summer4life",
    "password": "password123",
    "email": "summer4life@gmail.com"
  },
  {
    "username": "seedling77",
    "password": "password123",
    "email": "seedling77@gmail.com"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
