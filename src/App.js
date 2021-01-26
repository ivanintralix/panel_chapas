import React, { Fragment } from 'react';
import Panel from "./components/Panel";

import 'react-pro-sidebar/dist/css/styles.css';
import "./index.css";
import './css/Menu.css'
import './css/MenuAcciones.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/panel" component={Panel} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
