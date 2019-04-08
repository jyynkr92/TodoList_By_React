import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

const TodoSection = ({todos}) => {
    return (
        <ul className="todo_section">
            <TodoList todos={todos}></TodoList>
        </ul>
    )
}

const TodoList  = ({todos}) => {
    const todoList = todos.map(todo => {
        return <TodoItem completeFlag={todo.completeFlag} todoId={todo.todoId} content={todo.content} key={todo.todoId} ></TodoItem>
    })

    return todoList;
}

const TodoItem = ({completeFlag, todoId, content}) => {
    return(
        <li className={[completeFlag === true? "todo_complete" : "todo_progress", "todoItem"].join(" ")} key={todoId}>
            <span className="todo_content">{content}</span>
        </li>
    )
}
export default TodoSection;