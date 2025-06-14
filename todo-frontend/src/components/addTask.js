import { useState } from "react";
import api from '../api';

export default function AddTask(){
    const[task,settask] = useState({
        taskid:'',
        title:'',
        description:'',
        completed:false
    });


    const handlechange = (e)=>{
        const {name,value} =  e.target;
        settask({...task,[name]:value});

    }

    const handlesubmit = async(e)=>{
        e.preventDefault();

        try{
            await api.post('/add',task);
            alert('Added Succesfully');
            settask({taskid:'',title:'',description:'',completed:false});

        }
        catch(err)
        {
                alert(err.response?.data?.error ||'Error Adding task');
        }
    };

    return(
        <form onSubmit={handlesubmit}>
            <input name="taskid" placeholder="Task Id" onChange={handlechange} value={task.taskid}/><br/>
            <input name="title" placeholder="Title" onChange={handlechange} value={task.title}/><br/>
            <input name="description" placeholder="Description" onChange={handlechange} value={task.description}/><br/>
            <button type="submit">Add submit</button>

        </form>
    );

};