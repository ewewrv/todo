import { useState } from "react";

export default function TaskInput({ addTask }) {
    const [newTask, setNewTask] = useState({})

 //   newTask = [{complete:true, name:"имя"}]

    const handleAddTask = ()=>{ 
        if (newTask.trim() !== "") {
            addTask({name:newTask, complete: false});
            setNewTask("");
        }
    }

    function btnChange(event){
        setNewTask(event.target.value);
    }
    
    return (
    <>
        <input type="text" 
        placeholder="Введите задачу" 
        value={newTask} 
        className="in" 
        onChange={ (e) => {
            console.log(e.target.value);
            setNewTask(e.target.value);
        }}
        />
            <button onClick={handleAddTask}>Добавить</button>    
        </>
    );
}