import todo from './todo';
import filter from './filter';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    todoData : todo,
    filterData : filter
});

export default reducers;