var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
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

app.get('/', function(req, res, next){
  var sum = summ(req);
  console.log(sum.toString());
  res.send(sum.toString());
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

app.listen(3000);
