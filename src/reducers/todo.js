import * as types from '../actions/ActionTypes';

const initialState = {
    lastTodoId : 1,
    leftCount : 1,
    allTodos : [
        {
            todoId : 1,
            content : "hello world",
            completeFlag : false
        }
    ]
}

function todo(state = initialState, action) {
    switch (action.type) {
        case types.ADD : 
            return {
                lastTodoId : state.lastTodoId + 1,
                leftCount : state.leftCount + 1,
                allTodos : [
                    ...state.allTodos,
                    {
                        todoId : state.lastTodoId + 1,
                        content : action.text,
                        completeFlag : false
                    }
                ]
            }
        case types.TOGGLE : 
            const todoList = state.allTodos.map(todo => {
                return todo.todoId === Number(action.selectId) ? {...todo, completeFlag : !todo.completeFlag} : {...todo}
            });
            
            const toggleSelect = todoList.filter(todo => {
                return todo.todoId === Number(action.selectId)
            });

            return {
                lastTodoId : state.lastTodoId,
                leftCount : toggleSelect[0].completeFlag ? state.leftCount - 1 : state.leftCount + 1,
                allTodos : todoList
            }
        case types.DELETE :
            const {allTodos} = state;
            const deleteList = allTodos.filter(todo => {
                return todo.todoId !== Number(action.selectId)
            });
            
            const deleteSelect = state.allTodos.filter(todo => {
                return todo.todoId === Number(action.selectId)
            });

            return {
                lastTodoId : state.lastTodoId,
                leftCount : deleteSelect[0].completeFlag ? state.leftCount : state.leftCount - 1,
                allTodos : deleteList
            }
        case types.MODIFY :
            const modifyList = state.allTodos.map(todo => {
                return todo.todoId === Number(action.selectId) ? {...todo, content : action.input} : {...todo}
            });

            return {
                lastTodoId : state.lastTodoId,
                leftCount : state.leftCount,
                allTodos : modifyList
            }
        default :
            return state;
    }
}

export default todo;