import React from 'react';

const Post = ({id,title,author}) => (
	<div>
	  {id}: {title} written by {author.name}
	</div>
)

export default Post