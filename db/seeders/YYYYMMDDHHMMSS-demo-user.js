// src/seeders/YYYYMMDDHHMMSS-demo-user.js
"use strict";
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface) => {
    const password = await bcrypt.hash("password123", 10);

    return queryInterface.bulkInsert("Users", [
      {
        id: uuidv4(),
        name: "Demo User",
        email: "demo@gmail.com",
        phoneNumber: "1234567890",
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
