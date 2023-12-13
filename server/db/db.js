const { Sequelize } = require("sequelize");

const DATABASE_URL =
  process.env.DATABASE_URL ||
  "postgres://postgres:beta2244@localhost:5432/testDB";
//  const DATABASE_URL = process.env.DATABASE_URL || 'postgres://postgres:admin@localhost:5432/DVDsRUs';

const db = new Sequelize(DATABASE_URL, {
  logging: false,
});

module.exports = {
  db,
};
