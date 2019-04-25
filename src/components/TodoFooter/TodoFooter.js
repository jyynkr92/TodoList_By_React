import React from 'react';
import '../App.scss';

const TodoFooter = ({changeFilter, showFlag, leftCount}) => {
    return (
        <div className="todo_footer">
            <span className="todoLeft">{leftCount} tasks left</span>
            <span className={["mode", showFlag === "A"? "focus" : "outfocus"].join(" ")} onClick={changeFilter} data-showflag="A">All</span>
            <span className={["mode", showFlag === "D"? "focus" : "outfocus"].join(" ")} onClick={changeFilter} data-showflag="D">Doing</span>
            <span className={["mode", showFlag === "C"? "focus" : "outfocus"].join(" ")} onClick={changeFilter} data-showflag="C">Done</span>
        </div>
    )
}

export default TodoFooter;