export default function addAuthor(author) {
	return {
		type: 'ADD_AUTHOR',
		payload: {name: author, selected: false}
	}
}