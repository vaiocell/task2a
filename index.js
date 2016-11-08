var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendStatus('Вывод: ' + summ(req));
});


function summ(req){
    if (!isNaN(parseInt(req.query.a))){
      var x = parseInt(req.query.a);
    } else {
      x = 0;
    }
    if (!isNaN(parseInt(req.query.b))){
      var y = parseInt(req.query.b);
    } else {
      y = 0;
    }
    return x + y;
  }

app.listen(3000);
