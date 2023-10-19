const express = require("express");

const categoriaModel = require("../model/Categoria");

const router = express.Router();

//ROTA DE INSERÇÃO DE CATEGORIA
router.post('/categoria/cadastrarCategoria', (req, res) => {

    let { nome_categoria } = req.body;
    //console.log(nome_categoria);

    categoriaModel.create({ nome_categoria })
        .then(() => {
            return res.status(201).json({
                errorStatus: false,
                messageStatus: "Categoria inserida com sucesso"
            });
        })
        .catch((error) => {
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            });
        });

});

//ROTA DE LITSAGEM DE CATEGORIA
router.get('/categoria/listarCategoria', (req, res) => {
    categoriaModel.findAll()
        .then(
            (categoria) => {
                return res.status(200).json(categoria)
            }
        )
        .catch(
            (error) => {
                return res.status(500).json({
                    errorStatus: true,
                    messageStatus: error
                });
            });

});

//ROTA DE BUSCA DE CATEGORIA POR ID
router.get('/categoria/listarID/:cod_categoria', (req, res) => {

    let { cod_categoria } = req.params;

    categoriaModel.findByPk(cod_categoria)
        .then(
            (categoria) => {
                return res.status(200).json(categoria);
            }
        )
        .catch(
            (error) => {
                return res.status(500).json({
                    errorStatus: true,
                    messageStatus: error
                });
            });

});

//ROTA DE ALTERAÇÃO DE CATEGORIA
router.put('/categoria/alterarCategoria', (req, res) => {

    let { cod_categoria, nome_categoria } = req.body;

    categoriaModel.update(
        { nome_categoria },
        { where: { cod_categoria } }
    )
        .then(
            () => {
                return res.status(200).json(
                    {
                        errorStatus: false,
                        messageStatus: "Categoria alterada com sucesso"
                    }
                )
            }
        )
        .catch(
            () => {
                return res.status(500).json({
                    errorStatus: true,
                    messageStatus: error
                });
            });
});

//ROTA DE EXCLUSÃO
router.delete('/categoria/excluirCategoria/:cod_categoria', (req, res) => {

    let {cod_categoria} = req.params;

    categoriaModel.destroy(

    )
    .then(
        () => {
            return res.status(200).json(
                {
                    errorStatus: false,
                    messageStatus: "Categoria excluida com sucesso"
                }
            )
        }
    )
    .catch(
        () => {
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            });
        });

});

module.exports = router;