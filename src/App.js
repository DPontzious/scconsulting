import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/main";
import About from './pages/About/about';
import Resources from './pages/Resources'

import Nav from "./Components/Nav/index";
import Jumbo from "./Components/Jumbo"

function App() {
  return (
    <Router>

      <Nav />
      <Jumbo />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path='/About' component={About} />
        <Route exact path="/Resources" component={Resources} />
      </Switch>
    </Router>
  );
}

export default App;
