import React, {Component} from "react";
import ReactDOM from "react-dom";
import AddTask from "./components/AddTask";
import List from "./components/List";
import style from "./styles/style.less";

let tasks = [
    {id:1, value:"milk", done: false},
    {id:2, value:"gold", done: false},
    {id:3, value:"potato", done: false},
    {id:4, value:"10km walk", done: false},
    {id:5, value:"meet joe black on the roof", done: false}
]
let root = document.getElementById("container");
class App extends Component{
    constructor(){
        super();
        this.state = {
            tasks: tasks
        };
        this.saveTask = this.saveTask.bind(this);
        this.doneTodo = this.doneTodo.bind(this);
    }
    saveTask(task){
        this.setState(function(prevState){
            prevState.tasks.push({
                id: prevState.tasks.length+1,
                value: task,
                done: false
            });
            return prevState;
        });
    }
    doneTodo(taskId){
        return this.setState(function(prevState){
            prevState.tasks.forEach(task => {
               task.done = task.id===taskId?true:task.done
            });
            return prevState;
        });
    }
    render(){
        return (
            <div className="todo">
                <AddTask onSubmitHandler={this.saveTask}/>
                <List onRemoveTask={this.doneTodo} tasks={tasks}/>
            </div>            
        )
    }
}
ReactDOM.render(<App/>, root);