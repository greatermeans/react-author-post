import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import handleSubmit from '../index.js'

class Selector extends Component {

  addAuthor (event) {
  	event.preventDefault()
    var authorName = document.querySelector('input').value
    document.querySelector('form').reset()
    debugger
    handleSubmit(authorName)
  }
  

  render() {
    return (
    	<div className='search-bar'>
   	 		<form onSubmit={this.addAuthor.bind(this)} >
    			<input type='text' placeholder="Author name goes here" />
    		</form>
    	</div>
    )
  }
}

export default Selector