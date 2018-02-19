import React from "react";
import Task from "./Task";

export default function List(props){
    function removeTask(taskId){
        props.onRemoveTask(taskId);
    }
    return(
        <div className="task-list">
            {props.tasks.map(task => <Task onClickHandler={removeTask} key={task.id} task={task}/>)}
        </div>
    );
}