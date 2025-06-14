const mongoose = require('mongoose');

const taskschema = new mongoose.Schema({
    taskid:{
        type:Number,
        unique:true,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:String,

    completed:{
        type:Boolean,
        default:false
    }

});

const Task = mongoose.model('Task',taskschema);
module.exports = Task;


