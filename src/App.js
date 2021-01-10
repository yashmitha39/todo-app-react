import React, {Component} from 'react';
import Todos from './Todos'
import AddToDo from './AddToDo'

class App extends Component{
  state = {
    todos: [
      {id:1, content: "Wake Up"},
      {id:2, content: "Brush Your Teeth"}
    ]
  }

  deleteToDo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({
      todos // ES allows us to just say todos instead of todos:todos if var names are same
    })
  }

  addToDo = (todo) => {
    todo.id=Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo}/>
        <AddToDo addToDo={this.addToDo}/>
      </div>
    );
  }
  
}

export default App;
