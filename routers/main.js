const express = require('express');

const mainController = require('../controllers/mainController')

const router = express.Router();

router.get('/', mainController.index);
router.get('/detailMenu', mainController.detail);

router.get('/detail/:menuid')

// router.get('/about', mainController.about);

module.exports = router;
