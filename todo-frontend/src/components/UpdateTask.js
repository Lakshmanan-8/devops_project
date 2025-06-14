import { useState } from "react";
import api from "../api";

export default function UpdateTask()
{
    const[taskid,settaskid] = useState('');
    const[fields,setfields] = useState({
        title:'',
        description:'',
        completed:false
    });
    const handleonChange = (e)=>
    {
        const{name,value} = e.target;
        setfields({...fields,[name]:value});
    }
    const handlesubmit = async(e)=>
    {
        e.preventDefault();
        try
        {
             const res = await api.put(`/update/${taskid}`,fields);
            alert("Updated Successfully");
             setfields({taskid:'',title:'',description:'',completed:false});
        }catch(err)
        {
            alert("Error Updating",err);
        }
    };

    return(
        <form onSubmit={handlesubmit}>
            <input name="taskid" value={taskid} onChange={(e)=>settaskid(e.target.value)}/><br/>
            <input name="title" value={fields.title} onChange={handleonChange}/><br/>
            <input name="description" value={fields.description} onChange={handleonChange}/><br/>
            <select name="completed" value={fields.completed} onChange={handleonChange}>
                <option value={false}>Incompleted</option>
                <option value={true}>Completed</option>
                </select><br/>
            <button type="submit">Update</button>

        </form>
    );

};