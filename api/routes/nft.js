const express = require('express')
const router = express.Router()
const { createNft, getNft } = require('../controllers/nftController')

router.get('/createNft', createNft)
router.get('/getNft', getNft)

module.exports = router