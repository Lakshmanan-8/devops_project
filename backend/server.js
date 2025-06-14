const express = require('express');
const dotconfig = require('dotenv');
const mongoose = require('mongoose');
const crud = require('./routes/crud');
const cros = require('cors');


dotconfig.config();
const app = express();
app.use(express.json());
app.use(cros());


mongoose.connect(process.env.monogo).then(()=>
{
    console.log("DB connected succesfully");
}).catch((err)=>{
    console.log("DB connection error",err);
});

app.use('/todos',crud);


app.listen(process.env.PORT,()=>{
    console.log(`server is listening in port ${process.env.PORT}`);
});