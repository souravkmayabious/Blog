const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

const Tags = sequelize.define(
  'tags',
  {
    tag_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    slug:{
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true,
    }
  }, {
    tableName: 'tags', 
    timestamps: true,  
    underscored: true, 
  }
);

module.exports = Tags;