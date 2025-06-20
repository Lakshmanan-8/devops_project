import React,{useState} from "react";
import AddTask from "./addTask";
import TaskList from "./TaskList";

export default function TaskPage()
{
    const[showform,setshowform] = useState(false);
    const[showlist,setlist] = useState(false);
    


    const handleonclickadd =()=>{
        setshowform(true);
        setlist(false);

    };
     const handleonclicklist =()=>{
        setshowform(false);
        setlist(true);

    };

    return(
        <div>
            {!showform && !showlist &&(
                <>
                <h3 style={{cursor:'pointer',color:'red'}}onClick={handleonclickadd}><a>New Task</a></h3>
                <h3 style={{cursor:'pointer',color:'red'}}onClick={handleonclicklist}><a>All Task</a></h3>

                </>
            )}
            {showform && <AddTask/>}
            {showlist &&  <TaskList/>}
        </div>

        
    );
};