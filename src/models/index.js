const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Device = require("./device")(sequelize, Sequelize);
db.Category = require("./category")(sequelize, Sequelize);

db.Category.hasMany(db.Device, { foreignKey: 'categoryId', as: 'devices' });
db.Device.belongsTo(db.Category, { foreignKey: 'categoryId', as: 'category' });

module.exports = db;
