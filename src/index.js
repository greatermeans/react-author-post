import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux'


function authors(state = [], action){
  switch(action.type){
    case 'ADD_AUTHOR':
      return state = state.concat(action.payload)
    default:
      return state
  }
}

function posts(state = [], action){
  switch(action.type){
    case 'ADD_POST':
      return state = state.concat(action.payload)
    default:
      return state 
  }
}

function chosenOne(state = null, action){
  if ((state !== null) && (action.type === 'SELECT_AUTHOR') && (action.payload.id !== state.id)) {
      return state = action.payload
    } else if ((state === null) && (action.type === 'SELECT_AUTHOR')){
      return state = action.payload
    } else if ((action.type === 'SELECT_AUTHOR') && (action.payload.id === state.id)){
      return null
    } else {
    return state
  }
}


const reducer = combineReducers({
	authors, 
	chosenOne,
	posts
});


const store = createStore(reducer,window.devToolsExtension && window.devToolsExtension())

function render() {
	ReactDOM.render(<Provider store={store}>
  		<App/>
  			</Provider>,
  	document.getElementById('root')
	);
}
store.subscribe(render)
render()