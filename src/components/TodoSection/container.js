import React, { Component } from 'react';
import TodoSection from './TodoSection';
import { connect } from 'react-redux';
import * as todoAction from '../../actions';

class Container extends Component {
    state = {
        input : ""
    };

    render() {
        return (
            <TodoSection todos={this.props.filterList} toggleTask={this.toggleTask} deleteTask={this.deleteTask} modifyContent={this.modifyContent} onModified={this.onModified}></TodoSection>
        )
    }

    //onChange -> onModified
    onModified = (event) => {
        this.setState ({
            input : event.target.value
        });
    }

    deleteTask = (event) => {
        const {deleteTodo} = this.props;
        const {selected} = event.target.dataset;
        deleteTodo(selected);
    }

    toggleTask = (event) => {
        const {toggleTodo} = this.props;
        const {selected} = event.target.dataset;
        toggleTodo(selected);
    }

    modifyContent = (event) => {
        const {modifyTodo} = this.props;
        const {selected} = event.target.dataset;
        const {input} = this.state;
        modifyTodo(selected, input);
    }
}

function getFilterList (todoList, filterVal) {
    switch (filterVal) {
        case "A" :
            return todoList;
        case "D" :
            return todoList.filter(todo => !todo.completeFlag);
        case "C" : 
            return todoList.filter(todo => todo.completeFlag);
        default : 
            return todoList;
    }
}

const mapStateToProps = (state) => ({
    allTodos : state.todoData.allTodos,
    filterVal : state.filterData.filter,
    filterList : getFilterList(state.todoData.allTodos, state.filterData.filter)
});

const mapToDispatch = (dispatch) => ({
    deleteTodo: (selectId) => {dispatch(todoAction.deleteTodo(selectId));},
    toggleTodo: (selectId) => {dispatch(todoAction.toggleTodo(selectId));},
    modifyTodo: (selectId, input) => {dispatch(todoAction.modifyTodo(selectId, input));}
});

export default connect(mapStateToProps, mapToDispatch)(Container);