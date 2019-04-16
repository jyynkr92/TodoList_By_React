import React, { Component} from 'react';
import PropTypes from 'prop-types';
import addImg from './img/add.png';
import styles from './CSSModule.module.scss';

const TodoHeader = ({todos, addTodo, change, input, keyPress}) => {
    return (
        <div className={styles.todo_header}>
            <label htmlFor={styles.inp} className={styles.inp}>
                <input onChange={change} onKeyPress={keyPress} value={input}  type="text" id="inp" placeholder="&nbsp;"/>
                <span className={styles.label}>Write Todo</span>
                <span className={styles.border}></span>
            </label>
            <span className={styles.add_span} onClick={addTodo}><img src={addImg} alt="addTodo"/></span>
        </div>
    );
}

export default TodoHeader;