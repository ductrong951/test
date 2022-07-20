const express = require('express');
const router = express.Router();
const Sitecontroller = require('../app/controllers/Sitecontroller')

router.get('/', Sitecontroller.index)
router.get('/music', Sitecontroller.music)
router.get('/tvshow', Sitecontroller.tvshow)
router.get('/search', Sitecontroller.search)
module.exports = router;