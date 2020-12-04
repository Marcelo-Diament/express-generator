var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Aula de Views',
    subtitle: 'Aula firmeza bagarai',
    repo: 'https://github.com/Marcelo-Diament/express-generator'
  });
});

module.exports = router;
