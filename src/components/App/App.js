import React, {Component} from 'react';
import TodoHeader from '../TodoHeader/container';
import TodoSection from '../TodoSection/container';
import TodoFooter from '../TodoFooter/container';

class App extends Component {
    render () {
        return (
            <div className="todo_main">
                <div><h1>To Do List</h1></div>
                <TodoHeader></TodoHeader>
                <TodoSection></TodoSection>
                <TodoFooter></TodoFooter>
            </div>
        )
    }
}

export default App;