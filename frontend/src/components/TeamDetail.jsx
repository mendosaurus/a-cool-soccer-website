import React, { Component } from "react";
import axios from "axios";
import "./TeamDetail.css";
import Card from "react-bootstrap/Card";

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
          <p>{team.strDescriptionEN}</p>
          <Card style={{ width: "80%" }}>
            <Card.Img
              variant="top"
              src={team.strStadiumThumb}
              style={{ width: "100%" }}
            />
            <Card.Body>
              <Card.Text>{team.strStadiumDescription}</Card.Text>
            </Card.Body>
          </Card>
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
