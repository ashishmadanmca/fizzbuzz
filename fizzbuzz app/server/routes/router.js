const express = require('express')
const fizzbuzzCtrl = require('../controllers/fizzbuzzController')
const router = express.Router()

router.get('/fizzbuzz/:count', fizzbuzzCtrl.getFizbuzz)

module.exports = router