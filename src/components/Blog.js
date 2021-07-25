import React from "react";

import {
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const blogPosts = [
  {
    title: "Blog post #1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Blog post #2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veritatis eaque earum atque saepe inventore possimus beatae aspernatur doloremque eius minima sed dolores obcaecati amet, modi exercitationem excepturi? Aut, velit?",
  },
  {
    title: "Blog post #3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sint! Exercitationem deserunt et aliquid quia repellendus fugit rerum quasi optio, voluptates aperiam officiis architecto. Quam vitae aspernatur perspiciatis earum accusantium.",
  },
];

const Blog = (props) => {
  const { url } = useRouteMatch();
  return (
    <>
      <h1>Blog about Crypto Currency</h1>
      <nav>
        {
          blogPosts.map((post, index) => (
            <>
              <Link to={`${url}/${index}`}>
                {post.title}
              </Link>
              <br />
            </>
          ))
        }
      </nav>
    </>
  );
};

export default Blog;
