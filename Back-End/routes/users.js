var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Youve reached the /users route"
  })
});


router.post('/', (req, res, next) => {

})

module.exports = router;
