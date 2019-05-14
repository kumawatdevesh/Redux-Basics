import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Arith from './reducers/arith';
import StoreResult from './reducers/storeResult';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    art: Arith,
    str: StoreResult
});

const logger = store => {
    return next => {
        return action => {
            console.log('[middleware] dispatching', action);
            const result = next(action);
            console.log('next state', store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
