import * as actionName from './../actions/actionName';

const initialState = {
    toDoList: []
}

//rxreducer
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionName.LOAD_LIST:
            return {
                ...state,
                toDoList: payload
            }
        default:
            return {
                ...state
            };
    }
}