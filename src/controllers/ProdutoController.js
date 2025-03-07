import Produto from "../modules/Produto.js";

class ProdutoController {
    static async novoProduto(req,res) {
        const {nome,preco,imagem,linkarProduto,categoria,FreteGratis}=req.body;

        //Validando dados
        if(nome|| !preco|| !imagem || !linkarProduto || !categoria || !FreteGratis){
            return res.status(400).json({message:'O nome, preço, imagem, linkar do produto, categorias e FreteGratis são obrigatorios'})
        }
        try{
            const produto= await Produto.novoProduto(nome,preco,imagem,linkarProduto,categoria,FreteGratis);
            res.status(201).json(produto);
        }catch(error){
            console.error('erro ao criar o usuario', error)
            res.status(500).json({message:'Erro ao criar usuario',error:message})
        }
    }
}

export default ProdutoController