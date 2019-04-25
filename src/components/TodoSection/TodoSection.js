import React from 'react';
import deleteImg from '../../img/delete.png';
import completeChangeImg from '../../img/complete_check.png';
import '../App.scss';

const TodoSection = ({todos, toggleTask, deleteTask, modifyContent, onModified}) => {
    return (
        <ul className="todo_section">
            {todos.map(todo => {
                return <TodoItem completeFlag={todo.completeFlag} todoId={todo.todoId} content={todo.content} key={todo.todoId} toggleTask={toggleTask} deleteTask={deleteTask} modifyContent={modifyContent} onModified={onModified}></TodoItem>
            })}
        </ul>
    )
}

const TodoItem = ({completeFlag, todoId, content, toggleTask, deleteTask, modifyContent, onModified}) => {
    return(
        <li className={[completeFlag === true? "todo_complete" : "todo_progress", "todoItem"].join(" ")} key={todoId}>
            <span className= "toggleCheck"><img src={completeChangeImg} alt="toggle" onClick={toggleTask} data-selected={todoId}/></span>
            <input type="text" className="todo_content" onBlur={modifyContent} data-selected={todoId} onChange={onModified} defaultValue={content}/>
            <span className="todo_delete"><img src={deleteImg} alt="delete" onClick={deleteTask} data-selected={todoId}/></span> 
        </li>
    )
}
export default TodoSection;