import * as actionTypes from '../actions';

const initialState = {
    results: [],
    person: []
};

const storeResult = (state = initialState, action) => {
    
    if(action.type === actionTypes.STORE){
    
        return{
            ...state,
            results: state.results.concat({value: action.result})
        }
    }
    if(action.type === actionTypes.ADDED_PERSON){
        const newPerson = {
            name: action.personData.name,
            age: action.personData.age
        }
        return{
            ...state,
            person: state.results.concat(newPerson)
        }
    }
    return state;
};

export default storeResult;