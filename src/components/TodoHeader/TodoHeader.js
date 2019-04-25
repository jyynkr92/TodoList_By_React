import React from 'react';
import addImg from '../../img/add.png';
import '../App.scss';

const TodoHeader = ({addTask, changeInput, input, keyPress}) => {
    return (
        <div className="todo_header">
            <label htmlFor="inp" className="inp">
                <input onChange={changeInput} onKeyPress={keyPress} value={input}  type="text" id="inp" placeholder="&nbsp;"/>
                <span className="label">Write Todo</span>
                <span className="border"></span>
            </label>
            <span className="add_span" onClick={addTask}><img src={addImg} alt="addTodo"/></span>
        </div>
    )
}

export default TodoHeader;