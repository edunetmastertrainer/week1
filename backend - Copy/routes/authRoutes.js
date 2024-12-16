const express = require('express');
const { signup, signin } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signup);  //register
router.post('/signin', signin);  //login



module.exports = router;
