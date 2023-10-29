const Sequelize=require('sequelize')

const sequelize=new Sequelize('node-db','root','asdfghjkl',{dialect:'mysql',host:'localhost',timezone: '+00:00'})

module.exports=sequelize