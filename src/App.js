import React from "react"
import './App.css';


//React Router Imports
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom"

//Pages
import Main from "./pages/main";
import Project from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/projects" component={Project}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
