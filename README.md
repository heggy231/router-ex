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

```jsx
import {
  Link,
  useRouteMatch
} from "react-router-dom";


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

```

* result: 
  - /blog/0
  - /blog/1
  - /blog/2


- What `Link to` and .map over array of Blog posts looks like once rendering:
```jsx
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
```

```html
<nav>
  <a href="/blog/0">Blog post #1</a>
  <br>
  <a href="/blog/1">Blog post #2</a>
  <br>
  <a href="/blog/2">Blog post #3</a>
  <br>
</nav>
```

- 404 Error Page not found page 2 options:
1) add catch all route *
```jsx
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <h2>404: Page Not Found.</h2>
          <Link to="/">Take me back to Home page!</Link>
        </Route>
      </Switch>
    </Router>
```

2) option 2 for 404 page not found error page:

* redirect user back to home page

```jsx
// add Redirect from react-router-dom
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link,
  Redirect
} from "react-router-dom";

// Redirect to home page
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
```

- When a user is not logged in, <Link to='/blog'> is hidden.

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);

// isLoggedIn initial state is false 
//   only include <Link to='/blog'> if isLoggedIn has a truthy value
{ isLoggedIn && <Link to="/blog">Blog</Link> }
```