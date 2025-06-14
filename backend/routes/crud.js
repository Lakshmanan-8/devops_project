//routes
const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.post('/add',async(req,res)=>{
    try{
        
        const {taskid,title,description,completed} = req.body;
        const exist = await Task.findOne({taskid:taskid});
        if(exist)
        {
            return res.status(400).json({error:'TaskId Already Exists'});
        }

        if(!title)
        {
            return res.status(400).json({error:'Title is required'});
        }
        

        const newtask = new Task({
           taskid,title,description,completed
        });

        await newtask.save();
        res.status(201).json({message:'Succesfully Task Added'});
        
    }catch(error)
    {
            res.status(500).json({error:'Registartion Error',details: error.message});
    }
});


router.get('/alltask',async(req,res) =>{
    try{
    const all = await Task.find();
    res.status(200).json(all);
    }
    catch(error)
    {
       res.status(500).json({ error: 'Error fetching tasks', details: error.message });
    }
});

router.put('/update/:taskid', async (req, res) => {
  try {
    const taskid = req.params.taskid;
    const update = req.body;

   

    const existing = await Task.findOne({ taskid: taskid });
   
    if (!existing) {
      return res.status(404).json({ error: `TaskId ${taskid} not found in DB` });
    }

    const updatedTask = await Task.findOneAndUpdate(
      { taskid: taskid },
      update,
      { new: true }
    );

    res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
  } catch (error) {
    res.status(500).json({ error: 'Error updating task', details: error.message });
  }
});


router.delete('/delete/:taskid',async(req,res)=>{
    try
    {
        const taskid = req.params.taskid;
            const deleted = await Task.findOneAndDelete({taskid});
            if(!deleted)
            {
                res.status(404).json({error:'Taskid Not Found'});
            }
            res.status(201).json({message:'Deleted Successfully'});
    }catch(error)
    {
        res.status(500).json({error:'Deletion error',details:error.message});
    }

})


module.exports = router;
