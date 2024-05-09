import { Client } from 'pg';

const conn = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DBNAME,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

try {
    conn.connect()
} catch (error) {
    console.log('Failed to connect to database: ',error)
}

export default conn;
