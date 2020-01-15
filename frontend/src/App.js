import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import Teams from "./components/Teams"
import TeamDetail from './components/TeamDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team-select" component={Teams} />
          <Route exact path="/team/:id" component={TeamDetail} />
        </Switch>
      </div>
    )
  }
}
