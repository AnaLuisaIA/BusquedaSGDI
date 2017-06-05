var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://useritc:tecnologico2017@ds135800.mlab.com:35800/doc_sistemas', ['documents']);

//Obtener todos los documentos
router.get('/admin', function (req, res, next) {
  db.documents.find(function(err,documents){
    if(err){
      res.send(err);
    }
    res.json(documents);
  });
});

module.exports = router;
