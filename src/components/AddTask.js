import React from "react";

export default function AddTask(props){
    let inputText = null;
    function submitHandler(e){
        e.preventDefault();
        props.onSubmitHandler(inputText.value);
        inputText.value = null;
    }
    return (
        <div>
            <form onSubmit={submitHandler.bind(this)}>
                <input className="add-task" name="task" ref={(input)=>{inputText = input}} type="text" autoComplete="off"/>
            </form>
        </div>
    )
}