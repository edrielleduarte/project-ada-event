const express = require('express')
const server = express.Router()

const querysDB = require('../service/ProductService')

server.get('/event', async (req, res) => {
    const event = await querysDB.selectAll();
    return res.status(200).json(event)
})

server.get('/event/:id', async (req, res) => {
    const events = await querysDB.selectUnique(req.params.id);
    return res.status(200).json(events)
})

server.post('/event', async (req, res) => {
    await querysDB.insertDb(req.body);
    return res.status(201)
})

server.delete('/event/:nome', async (req, res) => {
    await querysDB.deleteDb(req.params.nome);
    return res.status(204)
})



module.exports = server;