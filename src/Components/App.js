import React from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Error from "./Error";

const App = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
