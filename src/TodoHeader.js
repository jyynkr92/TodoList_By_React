import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import addImg from './img/add.png';

const TodoHeader = ({todos, addTodo, change, input, keyPress}) => {
    return (
        <div className="todo_header">
            <label htmlFor="inp" className="inp">
                <input onChange={change} onKeyPress={keyPress} value={input}  type="text" id="inp" placeholder="&nbsp;"/>
                <span className="label">Write Todo</span>
                <span className="border"></span>
            </label>
            <span className="add_span" onClick={addTodo}><img src={addImg} alt="addTodo"/></span>
        </div>
    );
}

export default TodoHeader;