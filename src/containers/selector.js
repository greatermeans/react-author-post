import React, { Component } from 'react';
import addAuthor from '../actions/add_author'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Selector extends Component {
	constructor (props) {
		super(props)
		this.state = {text: ''}
	}

	handleChange (event) {
		this.setState({text: event.target.value})
	}

  render() {
    return (
    	<div className='search-bar'>
    		<input id='authorName' 
    		type='text' 
    		placeholder="Author name goes here" 
    		onChange={this.handleChange.bind(this)}/>
    		<button onClick={() => {this.props.addAuthor(this.state.text)} }>Add Author</button>
    	</div>
    )
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({addAuthor: addAuthor}, dispatch)
}

const SmartSelector = connect(null, mapDispatchToProps)(Selector)

export default SmartSelector