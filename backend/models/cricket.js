const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const Cricket=sequelize.define('cricket',{
    id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    DOB:{
        type:Sequelize.STRING,
        allowNull:false
    },
    image:{
        type:Sequelize.TEXT('long'),
        allowNull:false
    },
    place:{
        type:Sequelize.STRING,
        allowNull:false
    },
    career:{
        type:Sequelize.STRING,
        allowNull:false
    },
    matches:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    fifties:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    centuries:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    wickets:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    average:{
        type:Sequelize.DOUBLE,
        allowNull:false
    }
  })
  
  module.exports=Cricket