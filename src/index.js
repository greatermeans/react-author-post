import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function createStore(){
    let state;
    const getState = () => {
      return state
    }
    const dispatch = (action) => {
      state = reducer(state, action)
      render()
    } 
    state = reducer(state, {})
    return { getState, dispatch}
}

const store = createStore(reducer)

const handleSubmit = function (authorName) {
	debugger
	store.dispatch({type: 'ADD_AUTHOR', payload: {authors: authorName}})
}

function reducer(state = {authors: []}, action){
	debugger
  switch(action.type){
    case 'ADD_AUTHOR':
      return state = {authors: state.authors.concat(action.payload.authors)}
    default:
      return state
  }
}

function render() {
	ReactDOM.render(
  	<App store={store.getState()}/>,
  	document.getElementById('root')
	);
}

render()

export default handleSubmit