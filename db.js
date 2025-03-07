import pkg from 'pg';
import dotenv from 'dotenv';

const {Pool}=pkg
dotenv.config()


//const BD= new Pool({
  //  connectionString:process.env.DATA_BASE
//})

const BD=new Pool({
    user:'postgres',
    host:'localhost',
    database:'db_produtos',
    password:'admin',
    port:5432,
}) 


const testarConexao= async( )=>{
    try{
        const client= await BD.connect();
        console.log("🔓 conexao com o banco de dados estabelecidos")
        client.release()
    }catch (error) {
        console.error("Erro ao conectar ao banco de dados",error.message)
    }
}




export  {BD,testarConexao}