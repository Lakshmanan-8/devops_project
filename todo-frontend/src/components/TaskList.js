import { useState,useEffect, use } from "react";
import api from "../api";


export default function TaskList(){
    const[task,settask] = useState([]);


    const fetchTask = async()=>
    {
        const res = await api.get('/alltask');
            settask(res.data);
    }

    const deleteTask = async(id)=>{

         await api.delete(`/delete/${id}`);
         fetchTask();


    };

    useEffect(()=>{
        fetchTask();
    },[]);  


    return(
        <div>
            {task.map((t)=>(
          <div key={t.taskid} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <p><b>Title:</b> {t.title}</p>
          <p><b>Description:</b> {t.description}</p>
          <p><b>Completed:</b> {t.completed ? 'Yes' : 'No'}</p>
             <button onClick={() => deleteTask(t.taskid)}>Delete</button>
             </div>
            ))}
        </div>
    );
}