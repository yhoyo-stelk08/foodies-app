import { Pool } from 'pg';

const conn = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DBNAME,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

export default conn;
