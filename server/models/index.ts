'use strict';

//const fs = require('fs');
//const path = require('path');
const Sequelize = require('sequelize');
//const process = require('process');
//const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/env/config')();
//const db:any = {};
const user = require('./user');

let sequelize: any;
if (config.use_env_variable) {
  sequelize = new Sequelize(config.dbURL);
} else {
  sequelize = new Sequelize(config.db, config.username, config.password);
}


const db = {
  sequelize,
  Sequelize,
  User: user(sequelize, Sequelize.DataTypes),
};



Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});

//module.exports = db;
export default db;
