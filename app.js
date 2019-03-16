// requires
var express = require('express');
var mongoose = require('mongoose');

//Inicializar variables
var app = express();

//conexion
mongoose.connect('mongodb://localhost:27017/hospitalDB',(err,res)=>{
    if(err) throw err;
    console.log('Base de datos HospitalDB Online');
});

//rutas
app.get('/',(Request, res, next)=>{

    res.status(200).json({
        ok: true,
        mensaje: 'peticion realizada correctamente'
    });


});

//escuchar peticiones

app.listen(3000,()=>{
    console.log('Express server puerto 3000');
});