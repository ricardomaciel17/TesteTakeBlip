const express = require('express'); //Cria o server com expresjs
const { dadosRepositorio } = require('./controller/index')
const http = require('http')

const app = express()
const port = process.env.PORT //Define a porta do servidor

app.use(express.json())
const server = http.createServer(app);
server.listen(port)

app.get('/repositorios', dadosRepositorio) 