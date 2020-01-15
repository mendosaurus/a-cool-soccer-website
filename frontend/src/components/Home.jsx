import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    console.log("home");
    return (
      <div>
        <div className="">
          <h1>Hello soccer fans.</h1>
          <h2>Stay tuned to your favorite team without hustle.</h2>
          <Link to="/team-select" className="btn teamSelectLink">
            Choose your favorite team now.
          </Link>
        </div>
      </div>
    );
  }
}
