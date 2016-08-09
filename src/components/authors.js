import React, { Component } from 'react';
import Author from './author'


class Authors extends Component {

  renderAuthors () {
    return this.props.list.authors.map((author) => {
        return (
          <Author key={author} id={author} />
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