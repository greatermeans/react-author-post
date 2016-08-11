export default function addPost(post, author) {
	return {
		type: 'ADD_POST',
		payload: {title: post, author: author}
	}
}