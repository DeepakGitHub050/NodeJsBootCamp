const mongoose = require('mongoose');
require('dotenv').config();

const database = mongoose.connect(
    process.env.DB_URL,
    {
        useNewUrlParser:true,
        useUnifieldTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    },
    (error)=>{
        if(!error)
            console.log("connected to MongoDB");
        else
            console.log("Failed to connect to MongoDB\n"+error);
    }
)