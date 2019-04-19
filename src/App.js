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
    showFlag : "A",
    leftCount : 1,
    todos : [
      {
        todoId : 1,
        content : "hello world",
        completeFlag : false
      }
    ],
    allTodos : [
      {
        todoId : 1,
        content : "hello world",
        completeFlag : false
      }
    ]
  }

  addTodo = () => {
    const {input, allTodos, lastTodoId, showFlag, leftCount} = this.state;
    const todoList = allTodos.concat({
      todoId : lastTodoId + 1,
      content : input,
      completeFlag : false
    })

    this.setState({
      input : "",
      lastTodoId : lastTodoId + 1,
      allTodos : todoList,
      leftCount : leftCount + 1,
      todos : showFlag === "A"? todoList : showFlag === "D"? todoList.filter(todo => !todo.completeFlag): todoList.filter(todo => todo.completeFlag)
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
    const {allTodos, showFlag, leftCount} = this.state;
    const todoList = allTodos.map(todo => {
      return todo.todoId === Number(selected) ? {...todo, completeFlag:!todo.completeFlag} : {...todo}
    });
    const selectedTodo = allTodos.filter(todo => todo.todoId === Number(selected));

    this.setState({
      allTodos : todoList,
      leftCount : selectedTodo[0].completeFlag? leftCount + 1 : leftCount - 1,
      todos : showFlag === "A"? todoList : showFlag === "D"? todoList.filter(todo => !todo.completeFlag) : todoList.filter (todo => todo.completeFlag)
    });
  }

  deleteTask = (event) => {
    const {allTodos, showFlag, leftCount} = this.state;
    const {selected} = event.target.dataset;
    const todoList = allTodos.filter(todo => todo.todoId !== Number(selected));
    const selectedTodo = allTodos.filter(todo => todo.todoId === Number(selected));

    this.setState ({
      allTodos : todoList,
      leftCount : selectedTodo[0].completeFlag? leftCount : leftCount - 1,
      todos : showFlag === "A"? todoList : showFlag === "D"? todoList.filter(todo => todo.todoId !== Number(selected)) : todoList.filter (todo => todo.todoId !== Number(selected))
    });
  }

  modifyContent = (event) => {
    const {allTodos, modifyInput, showFlag} = this.state;
    const {selected} = event.target.dataset;
    const todoList = allTodos.map(todo => {
      return todo.todoId === Number(selected) ? {...todo, content : modifyInput} : {...todo}
    })

    this.setState({
      allTodos : todoList,
      todos : showFlag === "A"? todoList : showFlag === "D"? todoList.filter(todo => !todo.completeFlag) : todoList.filter (todo => todo.completeFlag)
    });
  }
  getContent = (event) => {
    const {allTodos, showFlag} = this.state;
    const {selected} = event.target.dataset;
    const todoList = allTodos.map(todo => {
      return todo.todoId === Number(selected) ? {...todo, content : event.target.defaultValue} : {...todo}
    });

    this.setState({
      allTodos : todoList,
      todos : showFlag === "A"? todoList : showFlag === "D"? todoList.filter(todo => !todo.completeFlag) : todoList.filter (todo => todo.completeFlag)
    });
  }

  showAllTodo = () => {
    const {allTodos} = this.state;

    this.setState({
      showFlag : "A",
      todos : allTodos
    })
  }

  showDoingTodo = () => {
    const {allTodos} = this.state;
    this.setState({
      showFlag : "D",
      todos : allTodos.filter(todo => !todo.completeFlag)
    });
  }

  showCompleteTodo = () => {
    const {allTodos} = this.state;
    this.setState({
      showFlag : "C",
      todos : allTodos.filter(todo => todo.completeFlag)
    });
  }

  render() {
    const {input, todos, showFlag, leftCount} = this.state;
    const {addTodo, onChange, keyEvent, toggleTask, deleteTask, modifyContent, onModified, getContent, showCompleteTodo, showAllTodo, showDoingTodo} = this;

    return (
      <div className={styles.todo_main}>
        <div><h1>To Do List</h1></div>
        <TodoHeader todos={todos} addTodo={addTodo} change={onChange} input={input} keyPress={keyEvent}></TodoHeader>
        <div className={styles.todo_div}>
          <TodoSection todos={todos} toggleTask={toggleTask} deleteTask={deleteTask} modifyContent={modifyContent} onModified={onModified} getContent={getContent}></TodoSection>
        </div>
        <TodoFooter todos={todos} showAllTodo={showAllTodo} showCompleteTodo={showCompleteTodo} showDoingTodo={showDoingTodo} showFlag={showFlag} leftCount={leftCount}></TodoFooter>
      </div>
    );
  }
}

export default App;
