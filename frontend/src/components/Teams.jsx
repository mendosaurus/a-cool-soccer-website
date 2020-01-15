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
    spanishLaLiga: null,
    searchWords: null,
    teamsArr: [],
    searchResults: []
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

  copyTeams = () => {
    if (
      this.state.englishPremierLeague !== null &&
      !this.state.teamsArr.includes(this.state.englishPremierLeague)
    ) {
      this.state.teamsArr.push(this.state.englishPremierLeague);
    }
    if (
      this.state.germanBundesliga !== null &&
      !this.state.teamsArr.includes(this.state.germanBundesliga)
    ) {
      this.state.teamsArr.push(this.state.germanBundesliga);
    }
    if (
      this.state.italianSerieA !== null &&
      !this.state.teamsArr.includes(this.state.italianSerieA)
    ) {
      this.state.teamsArr.push(this.state.italianSerieA);
    }
    if (
      this.state.frenchLigue1 !== null &&
      !this.state.teamsArr.includes(this.state.frenchLigue1)
    ) {
      this.state.teamsArr.push(this.state.frenchLigue1);
    }
    if (
      this.state.spanishLaLiga !== null &&
      !this.state.teamsArr.includes(this.state.spanishLaLiga)
    ) {
      this.state.teamsArr.push(this.state.spanishLaLiga);
    }
  };

  displayTeams = () => {
    //  display all of the teams when searchWords is empty
    if (this.state.searchWords === null) {
      return this.state.teamsArr.flat(Infinity).map((team, i) => {
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
    } else if (
      this.state.searchWords !== null &&
      this.state.searchResults.length === 0
    ) {
      return <div>There is 0 search reasults.</div>;
    } else {
      return this.state.searchResults.map((team, i) => {
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

  handleInput = e => {
    console.log(e, e.target.value);
    e.preventDefault();
    this.setState({
      searchWords: e.target.value
    });
    let filterdTeams = this.state.teamsArr.flat(Infinity).filter(team => {
      console.log(team);
      return team.strTeam.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      searchResults: filterdTeams
    });
  };

  render() {
    console.log("teams!", this.state);
    this.copyTeams();
    return (
      <div>
        <h1>Search team</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by team name (e.g Real Madrid"
            name="search"
            className="search-input"
            onChange={this.handleInput}
          />
        </div>
        <div className="teams-container">{this.displayTeams()}</div>
      </div>
    );
  }
}
