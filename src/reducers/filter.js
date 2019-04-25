import * as types from '../actions/ActionTypes';

const initialState = {
    filter : "A"
}

function filter(state = initialState, action) {
    switch (action.type) {
        case types.FILTER :
            return {
                filter : action.filter
            }
        default : 
            return state;
    }
}

export default filter;