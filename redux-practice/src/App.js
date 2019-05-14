import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as actionTypes from './actions';
import Persons from './persons';
import Person from './person';
import * as actionCreators from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <span>Age: {this.props.counter}</span>
        <button onClick={this.props.onUp}>Up</button>
        <button onClick={this.props.onDown}>Down</button>
        <button onClick={() => this.props.store(this.props.counter)}>Store</button>
        <ul>
        {this.props.storedResult.map(res => {
          return <li>{res.value}</li>
        })}
        </ul> 
      <Persons onAdded = {this.props.onPerson}/>
      {this.props.person.map(res => (
        <Person 
        name={res.name}
        age={res.age}/>
      ))}
      </div>
    );
  }
}

const mapToProps = (state) => {
  return{
    counter: state.art.counter,
    storedResult: state.str.results,
    person: state.str.person
  }
};

const mapToDispatch = (dispatch) => {
  return{
    onPerson: (name, age) => dispatch({type: actionTypes.ADDED_PERSON, personData: {name, age}}),
    onUp: () => dispatch(actionCreators.add()),
    onDown: () => dispatch(actionCreators.down()),
    store: (result) => dispatch(actionCreators.store(result))
  }
};

export default connect(mapToProps, mapToDispatch)(App);
