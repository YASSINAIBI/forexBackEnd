const express = require('express')
const router = express.Router()
const {checkUserIsExist, signup, getUserTotalAmount, checkUserTotalAmount, checkWalletTotalAmount, buyCrypto, sellCrypto, addBuyToWallet, addSellToWallet, getuserUnfo} = require('../controllers/userController')
const {SignUpValidator} = require('../middllwars/signInAndsignUpValidator')

router.post('/signUp', SignUpValidator, checkUserIsExist, signup)
router.post('/buy', getUserTotalAmount, checkUserTotalAmount, buyCrypto, addBuyToWallet)
router.post('/sell', getUserTotalAmount, checkWalletTotalAmount, sellCrypto, addSellToWallet)
router.post('/info', getUserTotalAmount, getuserUnfo)

module.exports = router

