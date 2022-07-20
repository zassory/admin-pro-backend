const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {
    try{
        //await mongoose.connect(process.env.DB_CNN);
        await mongoose.connect('mern_user:Hakxf2n5@cluster0.sqinv.azure.mongodb.net/hospital');
        console.log('DB Online');
    }
    catch(error){
        console.log(error);
        throw new Error('Error a la hora de iniciar BD ver logs');
    }        
}

module.exports = {
    dbConnection
}