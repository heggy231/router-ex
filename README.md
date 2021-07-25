# React Routing

SPA effect for React app, I am using react-router-dom

* [react routing DC](https://learn.digitalcrafts.com/flex/lessons/full-stack-frameworks/react-router/#overview)

* Refactoring: Making route param to not have any hard coded path.

- before:
```jsx
  return (
    <>
      <h1>Blog about Crypto Currency</h1>
      <nav>
        {
          blogPosts.map((post, index) => (
            <>
              <Link to={`/blog/${index}`}>
                {post.title}
              </Link>
              <br />
            </>
          ))
        }
      </nav>
    </>
  );
```
- 3 steps to get rid of hard coded path:
  1. Import `useRouteMatch` from `react-router-dom`
  2. Invoke `useRouteMatch` to get the `url`
  3. Update `<Link>` using `url` (replace hard coded string `/blog`)

- after: refactoring

