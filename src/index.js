import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {combineReducers} from 'redux';

function authorReducer(state = [], action){
  switch(action.type){
    case 'ADD_AUTHOR':
      return state = state.concat(action.payload)
    default:
      return state
  }
}

function titleReducer(state = [], action){
  switch(action.type){
    case 'ADD_TITLE':
      debugger
      return state = state.concat(action.payload)
    default:
      return state 
  }
}

const reducer = combineReducers({
	authors: authorReducer, 
	titles: titleReducer
});

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



const handleAuthor = function (authorName) {
	store.dispatch({type: 'ADD_AUTHOR', payload: authorName})
}

const handleTitle = function (bookTitle,author_id) {
	store.dispatch({type: 'ADD_TITLE', payload: {title: bookTitle, author_id: author_id}})
}

function render() {
	ReactDOM.render(
  	<App store={store.getState()}/>,
  	document.getElementById('root')
	);
}

render()

export {handleAuthor,handleTitle}