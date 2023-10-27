const db = require('../db');

const selectAll = async () => {
    const conection = await db.connect()
    const res = await conection.query("SELECT * FROM event")
    return res.rows;
}

const selectUnique = async (id) => {
    const conection = await db.connect()
    const res = await conection.query("SELECT * FROM event WHERE cod_cli=$1", [id])

    if(res.rows.length === 0)
        return {mensagem: "Id não encontrado"}

    return res.rows;
}

const insertDb = async (customer) => {
    const conection = await db.connect()
    const sql = "INSERT INTO event(cod_cli, nome, sobrenome) VALUES($1, $2, $3)"
    await conection.query(sql, [customer.cod_cli, customer.nome, customer.sobrenome])

}

const deleteDb = async (nome) => {
    const conection = await db.connect()
    const sqlDelete = "DELETE FROM event WHERE nome=$1"
    await conection.query(sqlDelete, [nome])

}
module.exports = {selectAll, selectUnique, insertDb, deleteDb}