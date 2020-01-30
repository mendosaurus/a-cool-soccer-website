import React, { Component } from "react";
import axios from "axios";
import "./TeamDetail.css";

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

  displayTeamInfo = () => {
    let team = this.state.theTeam;
    return (
      <div>
        <div className="team-header">
          <img src={team.strTeamBadge} alt="" className="team-badge" />
          <p className="team-name">{team.strTeam}</p>
          <p>{team.strStadiumDescription}</p>
        </div>
        <div className="stadium-info">
          <p className="team-name">{team.strStadium}</p>
          <img src={team.strStadiumThumb} alt="home stadium" />
          <p>{team.strStadiumDescription}</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div>{this.displayTeamInfo()}</div>
      </div>
    );
  }
}
