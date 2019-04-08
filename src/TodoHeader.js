import React, { Component} from 'react';
import PropTypes from 'prop-types';

const TodoHeader = ({todos, addTodo, change, input}) => {
    return (
        <div>
            <input onChange={change} type="text"></input>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

export default TodoHeader;