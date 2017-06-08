const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const orm = require('./orm.js');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(8000, function(){
  console.log("your server is running on 8000");
});

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/orm-lite';

var test_user = orm.initialize(connectionString);
orm.getAll(test_user,function(){
  console.log(result)
});
orm.findById(test_user,2,function(){
  console.log(result)
});