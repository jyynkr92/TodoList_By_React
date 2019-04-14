import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

const TodoSection = ({todos, toggleTask, deleteTask}) => {
    return (
        <ul className="todo_section">
            <TodoList todos={todos} toggleTask={toggleTask} deleteTask={deleteTask}></TodoList>
        </ul>
    )
}

const TodoList  = ({todos, toggleTask, deleteTask}) => {
    const todoList = todos.map(todo => {
        return <TodoItem completeFlag={todo.completeFlag} todoId={todo.todoId} content={todo.content} key={todo.todoId} toggleTask={toggleTask} deleteTask={deleteTask}></TodoItem>
    })

    return todoList;
}

const TodoItem = ({completeFlag, todoId, content, toggleTask, deleteTask}) => {
    return(
        <li className={[completeFlag === true? "todo_complete" : "todo_progress", "todoItem"].join(" ")} key={todoId}>
            <span className="todo_content" onClick={toggleTask} data-selected={todoId}>{content}</span>
            <span className="todo_delete"><img src={require("/img/delete.png")} alt="delete" onClick={deleteTask} data-selected={todoId}/></span> 
        </li>
    )
}
export default TodoSection;