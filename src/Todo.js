import React, { Component} from 'react';
import PropTypes from 'prop-types';

function Todo({todos}) {
    return(
        <div className="Todo">
            <TodoHeader></TodoHeader>
            <TodoSection todos={todos}></TodoSection>
            <TodoFooter></TodoFooter>
        </div>
    )
}

function TodoHeader () {
    return(
        <div>
            <input type="text"></input>
            <button>Add Todo</button>
        </div>
    )
}

function TodoSection ({todos}) {
    let todoList = todos.map(todo => {
        return <TodoItem completeFlag={todo.completeFlag} key={todo.todoId} content={todo.content} ></TodoItem>
    })

    return todoList;
}

function TodoFooter () {
    return (
        <div>hello</div>
    )
}

function TodoItem({completeFlag, key, content}) {
    return(
        <li className={completeFlag === true? "todo_complete" : "todo_progress"} id={key}>
            <span className="todo_content">{content}</span>
        </li>
    )
}
export default Todo;