import React, { Component } from 'react';

const Author = () => {
  return (
      <div className='author'>
       <div>{this.props.id}</div>
        <form id='bookForm' onSubmit={this.addBook.bind(this)}>
            <input id='bookTitle' type="text" placeholder='add title' />
        </form>
      </div>
    )
}

export default Author