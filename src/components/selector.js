import React, { Component } from 'react';
import { handleAuthor } from '../index.js'

class Selector extends Component {

  addAuthor (event) {
  	event.preventDefault()
    var authorName = document.querySelector('input').value
    document.querySelector('form').reset()
    handleAuthor(authorName,"authors","ADD_AUTHOR")
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