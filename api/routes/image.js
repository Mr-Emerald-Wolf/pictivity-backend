const express = require('express')
const router = express.Router()
const { getImage, createImage } = require('../controllers/imageController')

router.get('/getImage', getImage)
router.get('/createImage', createImage)

module.exports = router