const express = require("express");

const app = express();

/*HABILITA A APLICAÇÃO A MANIPULAR JSON*/
app.use(express.json());

/*HABILITA A APLICAÇÃO A MANIPULAR DADOS DE UM CORPO DE DADOS*/
app.use(express.urlencoded({extended:true}));

const usuarioController = require('./controller/usuario');

app.use(usuarioController);

app.listen(8080, (req, res)=>{
    console.log("O servidor está hospedado em http://localhost:8080")
});

