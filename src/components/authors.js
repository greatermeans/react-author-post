import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Authors extends Component {

  renderAuthors () {
    debugger
    return this.props.list.authors.map((author) => {
      return (
        <li>{author}</li>
        )
      })
  }

  render() {
    debugger
    return (
    	<div className='author-list'>
        <ul>
   	 		{this.renderAuthors.bind(this)}
        </ul>
    	</div>
    )
  }
}

export default Authors