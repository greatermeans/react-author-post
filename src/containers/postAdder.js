import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import addPost from '../actions/add_post'
import Posts from '../components/posts'


class PostAdder extends Component {
	
	constructor(props){
		super(props)
		this.state={text: ''}
	}

	handleChange(event){
		this.setState({text: event.target.value})
	}
	render(){
		if(this.props.authors.length === 0){
			return <div></div>
		} else if(!this.props.chosenOne) {
				return<div>Choose an author to add/see posts...</div>
			}
		
		return (
			<div style={{display: this.props.chosenOne.selected ? 'block' : 'none'}}>
				<input 
				type='textarea' 
				placeholder='add posts here...'
				onChange={this.handleChange.bind(this)}
				/>
				<button 
				onClick={() => {this.props.addPost(this.state.text,this.props.chosenOne)} }>
				Add Post</button>
				<Posts posts={this.props.posts.filter(
					(post) => ( post.author.id === this.props.chosenOne.id))}/>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {authors: state.authors, chosenOne: state.chosenOne, posts: state.posts}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({addPost: addPost}, dispatch)
}

const SmartPostAdder =connect(mapStateToProps,mapDispatchToProps)(PostAdder)

export default SmartPostAdder