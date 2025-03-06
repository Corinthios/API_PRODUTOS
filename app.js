import express from 'express'
import {testarConexao} from './db.js'


const app = express();

testarConexao()

const porta =3000
app.listen(porta, () =>{
    console.log(`API rodando na porta https://locaslhot:${portal}`)
    
})

