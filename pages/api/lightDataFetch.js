// pages/api/hello.js
export const config = {
    //runtime: 'edge',
    // regions: 'sfo1', // only execute this function on sfo1
}

const {Pool} = require('pg') // or const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'applieddistsys-projectdb.cazkhelqqoe0.us-east-2.rds.amazonaws.com',
  database: 'postgres',
  password: 'nextjsvercelswany',
  port: 5433,
});

// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: process.env.PGSQL_USER,
//   host: process.env.PGSQL_HOST,
//   database: process.env.PGSQL_DATABASE,
//   password: process.env.PGSQL_PASSWORD,
//   port: process.env.PGSQL_PORT,
// });


// query result -> .rows -> stringify -> results -> res.send(results) -> .json() -> data.results =====>>>> 
// query result -> stringify -> results -> res.send(results) -> .json() -> data.rows
export default async function handler(req, res) {
    const db = await pool.connect()
    try {        
        const result = await db.query('SELECT * FROM customer_small'); // result.rows: Array of JSON, each row is a JSON object
        console.log("result: ");
        console.log(result + "\n");
        const results = { data: (result) ? result.rows : null};
        console.log("results data: ");
        console.log(results.data + "\n");
        // console.log(result.rows);
        // const results = JSON.stringify(result.rows)
        // const results = JSON.stringify(result)
        // console.log(results);
        // res.render('pages/index', results );
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.send('pages/index', results);
        db.release();
        
        // return new Promise(function(resolve, reject){........}) 
        // return results;
        // return new Response(
        //     JSON.stringify({
        //         results
        //     }),
        //     {
        //         status: 200,
        //         headers: {
        //         'content-type': 'application/json',
        //         },
        //     }
        // )
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({
                msg: error
            }),
            {
                status: 500,
                headers: {
                'content-type': 'application/json',
                },
            }
        )
    } 
    // finally {
    //     db.release();
    // }
};

// export default async function handler(req, res) {
//     try {  
//         const response = await fetch("https://rickandmortyapi.com/api/character"); // /?page=20
//         const data = await response.json();
//         const characters = data.results;

//         return new Response(
//         JSON.stringify({
//             characters
//         }),
//         {
//             status: 200,
//             headers: {
//             'content-type': 'application/json',
//             },
//         }
//         )
//     } catch (error) {
//         console.error(error);
//         return new Response(
//         JSON.stringify({
//             msg: error
//         }),
//         {
//             status: 500,
//             headers: {
//             'content-type': 'application/json',
//             },
//         }
//         )
//     }
// }