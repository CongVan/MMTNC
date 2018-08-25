var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Đồ án mạng máy tính nâng cao - Nhóm Avenger' });
});

module.exports = router;
