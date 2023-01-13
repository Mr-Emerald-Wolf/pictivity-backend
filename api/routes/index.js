const express = require('express')
const router = express.Router()

// const user = require('./user')
const image = require('./image')
const nft = require('./nft')
const auth = require('./auth')




// router.use('/user', user)
router.use('/image', image)
router.use('/nft', nft)
router.use('/auth', auth)



module.exports = router