import express from 'express'
import ProdutoController from '../controllers/ProdutoController.js'

const router= express.Router()

router.post('/Produtos',ProdutoController.novoProduto);


export default router