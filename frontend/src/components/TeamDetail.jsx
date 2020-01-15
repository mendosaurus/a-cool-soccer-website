import React, { Component } from "react";
import axios from "axios";

export default class TeamDetail extends Component {
  componentDidMount() {
    console.log("component!", this.props);
    let path = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${this.props.match.params.id}`;
    axios.get(path).then(team => {
      console.log(team);
    });
  }

  render() {
    return <div></div>;
  }
}
