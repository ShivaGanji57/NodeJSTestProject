const path = require('path');

const express = require('express');

const adminController = require('../controller/admin');

const router = express.Router();

router.post('/cricket',adminController.postCricket)
router.get('/cricket/:playerName',adminController.getCricket)
router.delete('/cricket/:id',adminController.deleteCricket)

module.exports=router