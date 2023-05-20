const mongoose = require('mongoose');

const mongoURI ="mongodb://localhost:27017/iNotebook?readPreference=primary&tls=false&directConnection=true"

const connectToMongo = () =>{

    mongoose.connect(mongoURI)
}

module.exports =  connectToMongo;