import Usuario from "../modules/usuario.js";

class UsuarioController {
    static async novoUsuario(req,res) {
        const {nome, email,senha}=req.body;

        //Validando dados
        if(!nome || !email || !senha){
            return res.status(400).json({message:'nome, email e senha obrigatorios'})
        }
        try{
            const usuario= await Usuario.novoUsuario(nome,email,senha);
            res.status(201).json(usuario);
        }catch(error){
            console.error('erro ao criar o usuario', error)
            res.status(500).json({message:'Erro ao criar usuario',error: error.message})
        }
    }
}

export default UsuarioController