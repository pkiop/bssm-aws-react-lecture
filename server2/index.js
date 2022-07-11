const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!!!');
});

app.get('/store', function (req, res) {
  res.send('치킨 국밥');
});

app.get('/goodbye', function (req, res) {
  res.send('Good Bye!');
});

app.listen(3000, () => {
  console.log('server start!!');
});
