import React, {Component, Fragment} from "react";

export default function Task(props){
    function handleClick(taskId){
        props.onClickHandler(taskId);
    }
    return (
        <Fragment>
            <div>
                <div  className={props.task.done?"task done":"task"}>{props.task.value}</div><i onClick = {handleClick.bind(this, props.task.id)} className="close">X</i>                
            </div>
        </Fragment>
    );
}

