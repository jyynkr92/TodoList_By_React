import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import deleteImg from './img/delete.png';
import completeChangeImg from './img/complete_check.png';

const TodoSection = ({todos, toggleTask, deleteTask, modifyContent, onModified, getContent}) => {
    return (
        <ul className="todo_section">
            <TodoList todos={todos} toggleTask={toggleTask} deleteTask={deleteTask} modifyContent={modifyContent} onModified={onModified} getContent={getContent}></TodoList>
        </ul>
    )
}

const TodoList  = ({todos, toggleTask, deleteTask, modifyContent, onModified, getContent}) => {
    const todoList = todos.map(todo => {
        return <TodoItem completeFlag={todo.completeFlag} todoId={todo.todoId} content={todo.content} key={todo.todoId} toggleTask={toggleTask} deleteTask={deleteTask} modifyContent={modifyContent} onModified={onModified} getConten={getContent}></TodoItem>
    })

    return todoList;
}

const TodoItem = ({completeFlag, todoId, content, toggleTask, deleteTask, modifyContent, onModified, getContent}) => {
    return(
        <li className={[completeFlag === true? "todo_complete" : "todo_progress", "todoItem"].join(" ")} key={todoId}>
            <span className="toggleCheck"><img src={completeChangeImg} onClick={toggleTask} data-selected={todoId}/></span>
            <input type="text" className="todo_content" onBlur={modifyContent} data-selected={todoId} onFocus={getContent} onChange={onModified} defaultValue={content}/>
            <span className="todo_delete"><img src={deleteImg} alt="delete" onClick={deleteTask} data-selected={todoId}/></span> 
        </li>
    )
}
export default TodoSection;