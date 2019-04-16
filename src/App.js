import React, { Component } from 'react';
import logo from './logo.svg';
import TodoHeader from './TodoHeader';
import TodoSection from './TodoSection';
import TodoFooter from './TodoFooter';
import styles from './CSSModule.module.scss';

class App extends Component {
  state = {
    input : "",
    lastTodoId : 1,
    modifyInput : "",
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

  onModified = (e) => {
    this.setState({
      modifyInput : e.target.value
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

  modifyContent = (event) => {
    const {todos, modifyInput} = this.state;
    const {selected} = event.target.dataset;
    const todoList = todos.map(todo => {
      return todo.todoId === Number(selected) ? {...todo, content : modifyInput} : {...todo}
    })
    console.log(todos);
    this.setState({
      todos : todoList
    });
  }
  getContent = (event) => {
    const {todos} = this.state;
    const {selected} = event.target.dataset;
    const todoList = todos.map(todo => {
      return todo.todoId === Number(selected) ? {...todo, content : event.target.defaultValue} : {...todo}
    });

    this.setState({
      todos : todoList
    });
  }
  render() {
    const {input, todos} = this.state;
    const {addTodo, onChange, keyEvent, toggleTask, deleteTask, modifyContent, onModified, getContent} = this;

    return (
      <div className={styles.todo_main}>
        <div><h1>To Do List</h1></div>
        <TodoHeader todos={todos} addTodo={addTodo} change={onChange} input={input} keyPress={keyEvent}></TodoHeader>
        <div className={styles.todo_div}>
          <TodoSection todos={todos} toggleTask={toggleTask} deleteTask={deleteTask} modifyContent={modifyContent} onModified={onModified} getContent={getContent}></TodoSection>
        </div>
        <TodoFooter todos={todos}></TodoFooter>
      </div>
    );
  }
}

export default App;
