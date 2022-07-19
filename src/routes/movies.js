const express = require('express');
const router = express.Router();
const moviescontroller = require('../app/controllers/moviescontroller')

router.get('/', moviescontroller.list)
router.get('/create', moviescontroller.create)
router.post('/stored', moviescontroller.stored)
router.get('/:id/edit', moviescontroller.edit)
router.put('/:id', moviescontroller.update)
router.delete('/:id', moviescontroller.delete)
router.get('/:id', moviescontroller.detail)

module.exports = router;