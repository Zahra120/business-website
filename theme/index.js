var express = require('express');
var app = express();
var pug = require ('pug');

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/vendor'));
app.use(express.static(__dirname + '/js'));
//app.set('view engine', 'ejs');
//app.set('views','./views');
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
  app.get('/', function(request, res) {
    res.send(pug.renderFile(__dirname + '/application.pug', {}));
  });

  app.get('/hello-world', function(req, res) {
    console.log('This is our custom code that gets printed');
    res.send('Now you request hello-world path!');
  });

  app.get('/*', function(req, res) {
    console.log('your dynamic path is: ');
    console.log(req.params[0]);
  });


  app.get('/example', function(req, res) {
    var simpleTemplate = function(name) {
      return '<html><head></head><body><h1>Hello, ' + name + '</h1></body></html';
    };

    res.send(simpleTemplate('Izel'));
  });
});

app.listen(3000);
console.log('App is running on localhost :3000');

//----
