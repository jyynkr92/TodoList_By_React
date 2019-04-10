import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoHeader from './TodoHeader';
import TodoSection from './TodoSection';
import TodoFooter from './TodoFooter';

class App extends Component {
  state = {
    input : "",
    lastTodoId : 1,
    todos : [
      {
        todoId : 1,
        content : "hello world",
        completeFlag : false
      }
    ]
  }

  addTodo = () => {
    const {input, todos, lastTodoId} = this.state;

    this.setState({
      input : "",
      lastTodoId : lastTodoId + 1,
      todos : todos.concat({
        todoId : lastTodoId + 1,
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
    const {selected} = event.target.dataset;
    const {todos} = this.state;
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
        <div className="todo_div">
          <TodoSection todos={todos} toggleTask={toggleTask} deleteTask={deleteTask}></TodoSection>
        </div>
        <TodoFooter todos={todos}></TodoFooter>
      </div>
    );
  }
}

export default App;
