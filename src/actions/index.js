import * as types from './ActionTypes';

/**
 * define action creators
 */

 export const addTodo = (text) => ({
     type : types.ADD,
     text
 })

export const deleteTodo = (selectId) => ({
    type : types.DELETE,
    selectId
});

export const modifyTodo = (selectId, input) => ({
    type : types.MODIFY,
    selectId,
    input
});

export const toggleTodo = (selectId) => ({
    type : types.TOGGLE,
    selectId
});

export const changeContent = (selectId, input) => ({
    type : types.CHANGE,
    input,
    selectId
})

export const changeFilter = (filter) => ({
    type : types.FILTER,
    filter
})