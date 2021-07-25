import React from "react";

import {
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import Post from "./Post";

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
  // ask React Router what current URL, path by
  //  calling useRouteMatch() function
  const { path, url } = useRouteMatch();
  return (
    <>
      <h1>Blog about Crypto Currency</h1>
      {/* This is same as path="/blog" */}
      <Route exact path={path}>
        <h2>Please choose a blog post.</h2>
      </Route>
      <nav>
        {
          blogPosts.map((post, index) => (
            <>
{/* replace /blog/01 => using url variable ${url}/01 */}
              <Link to={`${url}/${index}`}>
                {post.title}
              </Link>
              <br />
            </>
          ))
        }
      </nav>

      <Route path={`${url}/:id`}>
        <Post posts={blogPosts} />
      </Route>
    </>
  );
};

export default Blog;
