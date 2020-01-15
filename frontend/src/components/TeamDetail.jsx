import React, { Component } from "react";
import axios from "axios";

export default class TeamDetail extends Component {
  state = {
    theTeam: []
  };

  componentDidMount() {
    console.log("component!", this.props);
    let path = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${this.props.match.params.id}`;
    axios.get(path).then(team => {
      console.log(team);
      this.setState({
        theTeam: team.data.teams[0]
      });
      console.log(this.state);
    });
  }

  displayTeam = () => {
    let team = this.state.theTeam;
    return (
      <div>
        <div>{team.strTeam}</div>
        <div>
          <img src={team.strTeamBadge} alt="" />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div>{this.displayTeam()}</div>
      </div>
    );
  }
}
