const express = require('express');
const router = express.Router();
const Sitecontroller = require('../app/controllers/Sitecontroller')

router.get('/', Sitecontroller.index)
router.get('/search', Sitecontroller.search)
module.exports = router;