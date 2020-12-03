var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/users')

/* GET users listing. */
router.get('/', usersControllers.index);
router.get('/:id', usersControllers.show);
router.get('/add', usersControllers.add);
router.get('/edit/:id', usersControllers.edit);
router.get('/delete/:id', usersControllers.delete);

module.exports = router;
