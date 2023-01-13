const express = require('express')
const router = express.Router()
const { createNft } = require('../controllers/nftController')

router.get('/createNft', createNft)

module.exports = router