// require("dotenv").config({ path: "config.env" });
import { config } from 'dotenv'; config();

  import { Client } from 'pg'

//Use connection string for production
//comment out LOCAL variables for production
const client = new Client ({
   connectionString: process.env.connectionString,
  // user: process.env.DB_USER,
  // host: process.env.DB_HOST,
  // database: process.env.DB_NAME,
  // password: process.env.DB_PASSWORD,
  // port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

export { client };