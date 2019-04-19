import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styles from './CSSModule.module.scss';

const TodoFooter = ({showCompleteTodo, showAllTodo, showDoingTodo, showFlag, leftCount}) => {
    return (
        <div className={styles.todo_footer}>
            <span className={styles.todoLeft}>{leftCount} tasks left</span>
            <span className={[styles.mode, showFlag === "A"? styles.focus : styles.outfocus].join(" ")} onClick={showAllTodo}>All</span>
            <span className={[styles.mode, showFlag === "D"? styles.focus : styles.outfocus].join(" ")} onClick={showDoingTodo}>Doing</span>
            <span className={[styles.mode, showFlag === "C"? styles.focus : styles.outfocus].join(" ")} onClick={showCompleteTodo}>Done</span>
        </div>
    )
}

export default TodoFooter;