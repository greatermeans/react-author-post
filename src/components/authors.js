import React, { Component } from 'react';
import Author from './author'


class Authors extends Component {

  getBooks () {
    debugger
    this.props.list.titles.filter((title) => {return title.author_id === author})
  }

  renderAuthors () {
    return this.props.list.authors.map((author) => {
      debugger
        return (
          <Author key={author} id={author} books={this.getBooks.bind(this)} />
          )
      })
  }

  render() {
    return (
    	<div className='author-list'>
   	 		{this.renderAuthors()}
    	</div>
    )
  }
}

export default Authors