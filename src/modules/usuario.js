import { BD } from "../../db";

 class usuario {
    //Funçao estetica
    static async novoUsuario(nome,email,senha){
        const resultado = await BD.query('INSERT INTO prod_usuarios(nome,email,senha) VALUES($1,$2,$3)',
        [nome,email,senha]
        )
        return resultado.rows[0];
    }
 }

