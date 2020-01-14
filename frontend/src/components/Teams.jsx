import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Teams.css";

export default class Teams extends Component {
  state = {
    englishPremierLeague: null,
    germanBundesliga: null,
    italianSerieA: null,
    frenchLigue1: null,
    spanishLaLiga: null
  };

  componentDidMount() {
    const epl = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English_Premier_League`;
    console.log(epl);
    axios.get(epl).then(eachTeam => {
      this.setState({
        englishPremierLeague: eachTeam.data.teams
      });
    });
    const gbl = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=German_Bundesliga`;
    console.log(gbl);
    axios.get(gbl).then(eachTeam => {
      this.setState({
        germanBundesliga: eachTeam.data.teams
      });
    });
    const ita = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Italian_Serie_A`;
    console.log(ita);
    axios.get(ita).then(eachTeam => {
      this.setState({
        italianSerieA: eachTeam.data.teams
      });
    });
    const fl1 = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=French_Ligue_1`;
    console.log(fl1);
    axios.get(fl1).then(eachTeam => {
      this.setState({
        frenchLigue1: eachTeam.data.teams
      });
    });
    const esp = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Spanish_La_Liga`;
    console.log(esp);
    axios.get(esp).then(eachTeam => {
      this.setState({
        spanishLaLiga: eachTeam.data.teams
      });
    });
  }

  displayTeams = () => {
    if (this.state.englishPremierLeague !== null) {
      return this.state.englishPremierLeague.map((team, i) => {
        return (
          <div key={i} className="team-box">
            <Link to={`/team/${team.idTeam}`} className="team-link">
              <h2 className="team-name">{team.strTeam}</h2>
              <img
                className="team-badge"
                src={team.strTeamBadge}
                alt="{team.strTeam}"
              />
              <p className="league-name">{team.strLeague}</p>
            </Link>
          </div>
        );
      });
    }
  };

  render() {
    console.log("teams!", this.state);
    return (
      <div>
        <h1>Team select</h1>
        <div className="teams-container">{this.displayTeams()}</div>
      </div>
    );
  }
}
