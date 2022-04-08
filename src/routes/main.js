const express = require('express');
const router = express.Router();
const { main, admin} = require('../controllers/mainController');
const userAdmin = require('../middlewares/userAdmin');

router.get('/', main);
router.get('/admin', userAdmin, admin);

router.get('/login', (req, res)=> {
    res.send('Chau');
});

module.exports = router;