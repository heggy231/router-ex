import React from "react";

import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Router>
  );
}

export default App;
