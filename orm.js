const pg = require('pg');
const Seq = require('sequelize');

module.exports = {
  initialize: function(connectionString){
    const seq = new Seq(connectionString);
    var test_users = seq.define('test_users', {
      id: {type: Seq.INTEGER, autoIncrement: true, primaryKey: true},
      firstName: Seq.STRING,
      lastName: Seq.STRING
      }
    );
    test_users.sync();
    return test_users;
  },
  getAll: function(nameOfTable,callback){
    nameOfTable.findAll().then(function(result){
      console.log(result)
    });
  },
  findById: function(nameOfTable,id,callback){
    nameOfTable.findOne({
      where: {id: id}
    }).then(function(result,err){
      res.send(err)
      console.log(result)
    });
  }
};