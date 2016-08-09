import React, { Component } from 'react';
import {handleTitle} from '../index'


class Books extends Component {

  renderBooks () {
    debugger
  }

  addBook (event) {
    event.preventDefault()
    var bookName = document.getElementById('bookTitle').value
    document.getElementById('bookForm').reset()
    debugger
    handleTitle(bookName,this.props.author.props.id)
  }
  render() {
    return (
    	<div className='books'>
        <div>
          <form id='bookForm' onSubmit={this.addBook.bind(this)}>
            <input id='bookTitle' type="text" placeholder='add title' />
          </form>
        </div>
        <div>
          {this.renderBooks()}
        </div>
        
    	</div>
    )
  }
}

export default Books