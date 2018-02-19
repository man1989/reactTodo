import React from "react";
import Task from "./Task";

export default function List(props){
    return(
        <div className="task-list">
            {props.tasks.map(task => <Task key={task.id} task={task.value}/>)}
        </div>
    )
}