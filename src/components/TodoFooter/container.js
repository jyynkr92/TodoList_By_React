import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoFooter from './TodoFooter';
import { connect } from 'react-redux';
import * as todoAction from '../../actions';

class Container extends Component {
    static propType = {
        changeFilter : PropTypes.func.isRequired
    };

    render() {
        return (
            <TodoFooter changeFilter={this.changeFilter} showFlag={this.props.showFlag} leftCount={this.props.leftCount}></TodoFooter>        
        )
    }

    changeFilter = (e) => {
        const {showflag} = e.target.dataset;
        const {changeFilter} = this.props;

        changeFilter(showflag);
    }
}

const mapStateToProps = (state) => ({
    showFlag : state.filterData.filter,
    leftCount : state.todoData.leftCount
});

const mapToDispatch = (dispatch) => ({
    changeFilter : (filter) => {dispatch(todoAction.changeFilter(filter))}
});

export default connect(mapStateToProps, mapToDispatch)(Container);