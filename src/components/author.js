import React, { Component } from 'react';


class Author extends Component {

  constructor (props) {
    super(props)
    this.state = {clicked: false}
  }

  handleClick (event) {
    event.preventDefault()
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
    	<div className='author'>
       <div onClick={this.handleClick.bind(this)}>{this.props.id}</div>
        <div className='books'>
          {this.state.clicked ? <Books author={this}/> : 'See authors books...'}
        </div>
    	</div>
    )
  }
}

export default Author