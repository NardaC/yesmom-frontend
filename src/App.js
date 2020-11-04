import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <Router className="">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/blog" exact>
          <Blog></Blog>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
