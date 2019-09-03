const db = require('../src/db')

// db
//   .query(`DROP TABLE 'elpaisas';`)
//   .then(data => console.log(data));

db
  .query(`CREATE TABLE 'elpaisas' (
    'id' integer  PRIMARY KEY NOT NULL,
    'nombre' varchar(80) NOT NULL,
    'email' varchar(255) NOT NULL,
    'password' varchar(255) NOT NULL,
    'createdAt' datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    'updatedAt' datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
  );`)
  .then(data => console.log(data));
