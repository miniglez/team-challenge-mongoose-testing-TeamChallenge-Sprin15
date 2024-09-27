const mongoose = require("mongoose");
require("dotenv").config()

const dbConnected = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Conectado con exito con la base de datos")
    } 
    catch (error) {
        console.error(error)   
        throw new Error ("Error al iniciar la conexion con MongoDB")        
    }
}

module.exports = dbConnected