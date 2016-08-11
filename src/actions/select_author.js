export default function selectAuthor(author) {
	return {
		type: 'SELECT_AUTHOR',
		payload: author
	}
}