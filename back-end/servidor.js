import express from "express";
import mysql from "mysql"
import cors from 'cors'

const app=express();
app.use(
    express.json(),
    cors()
)

const conexion=mysql.createConnection({
    server: 'localhost',
    user: 'root',
    password: '',
    database: 'agencia'
})

conexion.connect(function(error){
    if (error){
        console.log ("Error al conectar")
    }else{
        console.log("Conexion realizada exitosamente")
    }
});

//LISTAR LOS TOUR DE LA BD
app.get('/obtenerTours',(peticion, respuesta)=>{
    const sql="SELECT * FROM tours WHERE estatus = 1"
    conexion.query(sql,(error, resultado)=>{
        if(error)return respuesta.json({error: "Error en la consulta"})
        return respuesta.json ({listatours: resultado})
    })
})

app.get('/obtenerTour/:id', (peticion, respuesta) => {
    const id = peticion.params.id;
    const sql = "select * from tours where id_tour=?";
    conexion.query (sql, [id], (error, resultado) => {
        if (error) return respuesta. json({ Error: "Error en la consulta" });
        return respuesta.json ({Estatus: "Correcto", Resultado: resultado })
    });
})

app.listen(8082, ()=>{
    console.log("Servidor iniciado...")
});