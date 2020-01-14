import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import Teams from "./components/Teams"

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/team-select" component={Teams} />
        </Switch>    
      </div>
    )
  }
}
