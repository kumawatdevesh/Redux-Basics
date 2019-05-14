import * as actionTypes from '../actions';

const initialState = {
    counter: 0
};

const arith = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === actionTypes.ADD){
        newState.counter++;
        return newState;
    }
    if(action.type === actionTypes.DOWN){
        newState.counter--;
        return newState;
    }
    return newState;
};

export default arith;