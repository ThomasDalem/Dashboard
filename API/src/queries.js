const Pool = require('pg').Pool;
const pool = new Pool({
    user: /*process.env.POSTGRES_USER |*/ 'postgres',
    host: '0.0.0.0',
    database: 'dashboard',
    password: /*process.env.POSTGRES_PASSWORD |*/ 'dashboard',
    port: /*process.env.DB_PORT |*/ 5432
});

const query = async (q, p) => {
    const client = await pool.connect();
    let res;
    try {
        await client.query("BEGIN");
        try {
            res = await client.query(q, p);
            await client.query("COMMIT");
        } catch (err) {
            await client.query("ROLLBACK");
            throw err;
        }
    } finally {
        client.release();
    }
    return res;
};

module.exports = { query };
