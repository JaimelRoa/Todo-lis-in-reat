import React from "react"
import Todos from "./Components/Todos"
import AddTodo from "./Components/addTodo"
import "./main.css"
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Todos:JSON.parse(localStorage.getItem("Todos"))
        }
    }
    setTodos=(Todos)=>{
        this.setState({Todos:Todos})
        localStorage.setItem("Todos",JSON.stringify(this.state.Todos))
    }
    addTodos = (e,value)=>{
        e.preventDefault()
        let Todos = this.state.Todos
        if(!Todos.includes(Todos.find(e=>e.text===value)) && value!==""){
            Todos = this.state.Todos.slice()
            Todos.push({text:value,completed:false})
            this.setTodos(Todos)
        }else{
            return
        }
    }
    deleteTodo = (event)=>{
        let Todos = this.state.Todos.slice()
        let text = event.target.parentNode.textContent
        let index = this.state.Todos.findIndex(e=>e.text===text)
        Todos.splice(index,1) 
        this.setTodos(Todos)
    }
    toggleTodo = (event) =>{
        let Todos = this.state.Todos.slice()
        let text = event.target.parentNode.textContent
        let element = this.state.Todos.find(e=>e.text===text)
        console.log(element)
        element.completed = !element.completed 
        this.setTodos(Todos)
    }
    render() {
        return(
            <div className="container App">
                <h2>Todo app</h2>
                <AddTodo onSubmit={this.addTodos}></AddTodo>
                <Todos todos={this.state.Todos} onClick={this.deleteTodo} onChange={this.toggleTodo}></Todos>
            </div>
        )
    }
}
export default App;