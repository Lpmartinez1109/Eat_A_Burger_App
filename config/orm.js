var connection = require("../config/connection.js");

var orm = {
    all: (cb) => {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, (err, result)=> {
            if (err) {
                throw err
            }
            cb(result);
        })
    },
    create: (name,cb) =>{
        var queryString = `INSERT into burgers(burger_name, devoured) VALUES ('${name}', False);`;
        connection.query(queryString, (err, result) => {
            if (err) {
              throw err;
            }
      
            cb(result);
          })
    }
}

module.exports = orm;