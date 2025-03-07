import { BD } from "../../db.js";

 class usuario {
    //Funçao estetica
    static async novoUsuario(nome,preco,imagem,linkarProduto,categoria,FreteGratis){
        const resultado = await BD.query('INSERT INTO prod_produtos(nome,preco,imagem,linkarProduto,categoria,FreteGratis)VALUES($1,$2,$3,$4,$5,$6)',
        [nome,preco,imagem,linkarProduto,categoria,FreteGratis]
        )
        return resultado.rows[0];
    }
 }


 export default usuario;