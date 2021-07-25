import React from 'react';

import {
  useParams
} from 'react-router-dom';

const Post = (props) => {
  // Get the "id" (our Array Index) from React Router.
  const { id } = useParams();
  // Use the id to get a specific post from the Array.
  const post = props.posts[id];

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  )
}

export default Post;
