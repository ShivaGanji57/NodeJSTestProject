const path = require('path');
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const sequelize=require('./util/database')
const app = express();
app.use(cors())
const adminRoutes = require('./routes/routeCricket');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes)
sequelize.sync().then(res=>{
    app.listen(3000)
}).catch(err=>console.log(err))