require('dotenv').config();
const mysql = require('mysql2')
let jConexion = {
    host: 'localhost',
    user: 'root',
    password: 'newpassword',
    database: 'alkemy'

}
//pasamos el json de conexion
var con = mysql.createConnection(jConexion ); 

//Abrimos conexión a la base de datos, "connect" regresa un error si no podemos

// conectarnos a la base de datos
con.connect(function(error){                                                                                                 
            try{ 
               //si error es true mandamos el mesaje de error
               if(error){ 

                   console.log("Error al establecer la conexión a la BD -- " + error); 

               //conexión exitosa, en este punto ya hemos establecido la conexión a base de datos
               }else{  
                   console.log("Conexión exitosa"); 
                    //Aquí debes escribir el código que necesites, un INSERT, SELECT etc.
               } 
           }
           catch(x){ 
               console.log("Contacto.agregarUsuario.connect --Error-- " + x); 
           } 
        })