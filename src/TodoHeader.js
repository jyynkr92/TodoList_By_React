import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

const TodoHeader = ({todos, addTodo, change, input, keyPress}) => {
    return (
        <div className="todo_header">
            <input className="content_input" onChange={change} onKeyPress={keyPress} value={input} type="text"></input>
            <span className="add_span" onClick={addTodo}><img src="/img/add.png" alt="addTodo"/></span>
        </div>
    );
}

export default TodoHeader;