import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

export default function Todo() {
    const [tasks, setTask] = useState([]) 
    const addTask = (task) => {
        setTask([...tasks, task]);
        console.log(tasks)
    };
    
    const deleteTask = (id) => {
        setTask(tasks.filter((task,index) => index !== id));
    };
    const editTask = (id) => {};


    return ( 
    <>
        <h1>Список дел</h1>
        <TaskInput addTask={addTask}/>
        <TaskList  
          taskList={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          
          />
    </>
    );
}