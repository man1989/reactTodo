import React, {Component, Fragment} from "react";

export default function Task(props){
    return (
        <Fragment>
            <div className="task">{props.task}</div>
        </Fragment>
    );
}

