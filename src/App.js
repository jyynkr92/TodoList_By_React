import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoHeader from './TodoHeader';
import TodoSection from './TodoSection';
import TodoFooter from './TodoFooter';

class App extends Component {
  state = {
    input : "",
    todos : [
      {
        todoId : 1,
        content : "hello world",
        completeFlag : false
      }
    ]
  }

  addTodo = () => {
    const {input, todos} = this.state;

    this.setState({
      todos : todos.concat({
        todoId : todos.length + 1,
        content : input,
        completeFlag : false
      })
    });
  }

  onChange = (e) => {
    this.setState({
      input : e.target.value
    });
  }  

  keyEvent = (e) => {
    if(e.key === "Enter") {
      this.addTodo();
    }
  }

  toggleTask = (event) => {
    const {selected, hello} = event.target.dataset;
    console.log(hello); //for event.target.dataset test
    const {todos} = this.state;
    console.log(selected);
    const todoList = todos.map(todo => {
      return todo.todoId === Number(selected) ? {...todo, completeFlag:!todo.completeFlag} : {...todo}
    });

    this.setState({
      todos : todoList
    });
  }

  deleteTask = (event) => {
    const {todos} = this.state;
    const {selected} = event.target.dataset;

    this.setState ({
      todos : todos.filter(todo => todo.todoId !== Number(selected))
    });
  }

  render() {
    const {input, todos} = this.state;
    const {addTodo, onChange, keyEvent, toggleTask, deleteTask} = this;

    return (
      <div className="todo_main">
        <div><h1>To Do List</h1></div>
        <TodoHeader todos={todos} addTodo={addTodo} change={onChange} input={input} keyPress={keyEvent}></TodoHeader>
        <TodoSection todos={todos} toggleTask={toggleTask} deleteTask={deleteTask}></TodoSection>
        <TodoFooter todos={todos}></TodoFooter>
      </div>
    );
  }
}

export default App;
