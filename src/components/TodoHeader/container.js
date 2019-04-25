import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoHeader from './TodoHeader';
import { connect } from 'react-redux';
import * as todoAction from '../../actions';

class Container extends Component {
    state = {
        input : ""
    };

    static propType = {
        addTodo: PropTypes.func.isRequired,
    };

    render() {
        const {input} = this.state;
        return (
            <TodoHeader input={input} keyPress={this._keyPress} changeInput={this._changeInput} addTask={this._addTask}></TodoHeader>
        )
    }

    _changeInput = (e) => {
        this.setState ({
            input : e.target.value
        })
    }

    _keyPress = (e) => {
        if(e.key === "Enter") {
          this._addTask();
        }
    }

    _addTask = () => {
        const {input} = this.state;

        this.props.addTodo(input);
        this.setState ({
            input : ""
        })
    }
}

const mapToDispatch = (dispatch) => ({
    addTodo: (text) => {dispatch(todoAction.addTodo(text));}
});

export default connect(null, mapToDispatch)(Container);