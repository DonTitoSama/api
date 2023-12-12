/*module.exports = (server) => {
    const userController = require('../controllers/userController');

    server.post('/register', userController.userRegister);
    server.post('/login', userController.loginRegister);
}*/

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router
    .route('/register')
    .post(userController.userRegister)

router
    .route('/login')
    .post(userController.userLogin)

module.exports = router;