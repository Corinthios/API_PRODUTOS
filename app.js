import express from 'express'
import {testarConexao} from './db.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import usuarioRoutes from './src/routes/usuarioRoutes.js'
import produtosRoute from './src/routes/ProdutoRoutes.js'

const app = express();

testarConexao()
app.use(cors())
//uso do body para receber os valores na requisição
app.use(bodyParser.json())
// Defenir rotas
app.use(usuarioRoutes)

app.use(produtosRoute)



const porta =3000
app.listen(porta, () =>{
    console.log(`API rodando na porta http://localhost:${porta}`)
    
})