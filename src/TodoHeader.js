import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

const TodoHeader = ({todos, addTodo, change, input, keyPress}) => {
    return (
        <div className="todo_header">
            <input onChange={change} onKeyPress={keyPress} type="text"></input>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

export default TodoHeader;