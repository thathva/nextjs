// db.js
import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    user: "postgres",
    password: "nextjsvercelswany",
    host: "applieddistsys-projectdb.cazkhelqqoe0.us-east-2.rds.amazonaws.com",
    port: 5433,
    database: "postgres"
  });
}

export default conn ;
