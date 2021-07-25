import React from "react";

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

const Blog = (props) => (
  <>
    <h1>Crypto Currency</h1>
    <article>
      <h2>Blog post #1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </article>
    <article>
      <h2>Blog post #2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro
        iusto placeat error assumenda veniam ad soluta velit quam esse explicabo
        dolorum pariatur suscipit natus, accusamus saepe laboriosam architecto
        repellat!
      </p>
    </article>
    <article>
      <h2>Blog post #3</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius qui
        nesciunt itaque nostrum incidunt, temporibus molestias? Non vel
        aspernatur, deserunt alias, nemo esse accusamus tempora recusandae
        praesentium repellat illo ipsum?
      </p>
    </article>
  </>
);

export default Blog;
