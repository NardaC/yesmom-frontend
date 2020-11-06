import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import BlogEspecific from "./components/Blog/BlogEspecific";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <div className="box-yesmom">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/blog" exact>
          <Blog></Blog>
        </Route>
        <Route path="/blog-especific" exact>
          <BlogEspecific></BlogEspecific>
        </Route>
        <Route path="/nosotros" exact>
          <About></About>
        </Route>
      </Switch>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
