const express = require('express');

const usuarioModel = require('../model/usuarioModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE USUARIO(POST)*/

router.post('/usuario/inserir', (req,res)=>{

    let nome_usuario = req.body.nome_usuario;
    let email_usuario = req.body.email_usuario;
    let senha_usuario = req.body.senha_usuario;
    
    usuarioModel.create({
        nome_usuario: nome_usuario,
        email_usuario: email_usuario,
        senha_usuario: senha_usuario
    }).then(()=>{
        return res.status(201).json({
            errorStatus:false,
            mensageStatus:'USUÁRIO INSERIDO COM SUCESSO'
        });
    }).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus: error
        });
    });
});

/* ROTA DE SELEÇÃO DE USUARIO(GET)*/
    router.get('/usuario/selecionar', (req,res)=>{
        
        usuarioModel.findAll()
        .then(
            (usuarios)=>{
                res.json(usuarios);
            }
        ).catch(
            (error)=>{
                return res.status(500).json({
                    errorStatus:true,
                    mensageStatus: error
                });
            }
        );

    });

/* ROTA DE ALTERAÇÃO DE USUARIO(PUT)*/
router.put('/usuario/alterar', (req, res) => {
    const { ID_usuario, nome_usuario, email_usuario, senha_usuario } = req.body;
    
    usuarioModel.update(
        { nome_usuario, email_usuario, senha_usuario },
        { where: { ID_usuario } }
    )
    .then(() => {
            return res.status(200).json({
            errorStatus: false,
            mensageStatus: 'USUÁRIO ALTERADO COM SUCESSO'
            });
    }).catch((error) => {
            return res.status(500).json({
            errorStatus: true,
            mensageStatus: error
            });
        });
});


    /* ROTA DE EXCLUSÃO DE USUARIO(DELETE)*/
    router.delete('/categoria/excluir/:id', (req,res)=>{
        let id = req.params.id;
        console.log('ID: ' + id);

        usuarioModel.destroy(
            {where:{ID_usuario: id}}
        ).then(
            ()=>{
                return res.status(200).json({
                    errorStatus:false,
                    mensageStatus:'USUÁRIO EXCLUÍDO COM SUCESSO'
                });
            }
        ).catch(
            (error)=>{
                return res.status(500).json({
                    errorStatus:true,
                    mensageStatus: error
                });
            }
        );
    });

module.exports = router;
