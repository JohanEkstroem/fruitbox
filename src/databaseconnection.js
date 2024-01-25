import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: process.env.DATABASE_URL,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})

// A simple SELECT query
try {
    const [results, fields] = await connection.query(
        //   'SELECT * FROM `film` WHERE `name` = "Page" AND `age` > 45'
        'SELECT * FROM `film` WHERE `film_id` = 98'
    );
  
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }
  
  // Using placeholders
//   try {
//     const [results] = await connection.query(
//       'SELECT * FROM `film` WHERE `name` = ? AND `age` > ?',
//       ['Page', 45]
//     );
  
//     console.log(results);
//   } catch (err) {
//     console.log(err);
//   }