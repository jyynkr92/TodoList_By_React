import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

const TodoSection = ({todos, toggleTask}) => {
    return (
        <ul className="todo_section">
            <TodoList todos={todos} toggleTask={toggleTask}></TodoList>
        </ul>
    )
}

const TodoList  = ({todos, toggleTask}) => {
    const todoList = todos.map(todo => {
        return <TodoItem completeFlag={todo.completeFlag} todoId={todo.todoId} content={todo.content} key={todo.todoId} toggleTask={toggleTask}></TodoItem>
    })

    return todoList;
}

const TodoItem = ({completeFlag, todoId, content, toggleTask}) => {
    return(
        <li className={[completeFlag === true? "todo_complete" : "todo_progress", "todoItem"].join(" ")} key={todoId} onClick={() => toggleTask(todoId)}>
            <span className="todo_content">{content}</span>
        </li>
    )
}
export default TodoSection;