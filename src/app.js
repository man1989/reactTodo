import React, {Component} from "react";
import ReactDOM from "react-dom";
import AddTask from "./components/AddTask";
import List from "./components/List";

let tasks = [
    {id:1, value:"milk", done: false},
    {id:2, value:"gold", done: false},
    {id:3, value:"potato", done: false},
    {id:4, value:"10km walk", done: false},
    {id:5, value:"meet joe", done: false}
];
let root = document.getElementById("container");
class App extends Component{
    constructor(){
        super();
        this.state = {
            tasks: tasks
        };
        this.saveTask = this.saveTask.bind(this);
    }
    saveTask(task){
        this.setState(function(prevState){
            prevState.tasks.push({
                id: prevState.tasks.length+1,
                value: task,
                done: false
            });
            console.log(task);
            return prevState;
        });
    }
    render(){
        return (
            <div className="todo">
                <AddTask onSubmitHandler={this.saveTask}/>
                <List tasks={tasks}/>
            </div>            
        )
    }
}
ReactDOM.render(<App/>, root);