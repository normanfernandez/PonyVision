var express = require('express');
var app = express();

var port = process.env.SOCKET || 3000;

app.use(express.static('src/'));

app.get('/api', function(req, res){
  var data = [
    {
      name: 'Twiligth Sparkle',
      color: 'Purple'
    },
    {
      name: 'Fluttershy',
      color: 'Yellow'
    }
  ];

  res.send(JSON.stringify(data));
});

app.listen(port, function(){
  console.log('Open on port: ' + port);
});
