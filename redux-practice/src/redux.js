const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === 'add'){
        newState.counter++
    }
    return newState;
};

const store = createStore(reducer);

store.dispatch({type: 'add'});

store.subscribe(() => {
    console.log('subscribe', store.getState());
});

console.log(store.getState());