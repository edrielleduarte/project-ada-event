const { Pool } = require('pg')

const connect = async () => {
    if (global.connection)
        return global.connection.connect()

    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    })

    const client = await pool.connect()
    console.log("Conexão com banco efetuado com sucesso!!")

    const hrs = await client.query("select now()");
    console.log(hrs.rows[0]);

    client.release();

    global.connection = pool;

    return pool.connect();
}

module.exports = { connect }
