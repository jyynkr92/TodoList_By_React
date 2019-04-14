import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

const TodoHeader = ({todos, addTodo, change, input, keyPress}) => {
    return (
        <div className="todo_header">
            <label for="inp" class="inp">
                <input onChange={change} onKeyPress={keyPress} value={input}  type="text" id="inp" placeholder="&nbsp;"/>
                <span class="label">Write Todo</span>
                <span class="border"></span>
            </label>
            <span className="add_span" onClick={addTodo}><img src={require("./img/add.png")} alt="addTodo"/></span>
        </div>
    );
}

export default TodoHeader;