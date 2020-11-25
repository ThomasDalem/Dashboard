import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class GithubInfosUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "TonyMarini",
      usernameValidated: "TonyMarini",
      avatarUrl: null,
      bio: null,
      nbFollowers: 0,
      nbRepos: 0,
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleRequestGithubApi = this.handleRequestGithubApi.bind(this);

    this.handleRequestGithubApi();
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  //https://api.github.com/users/TonyMarini/repos
  //https://api.github.com/search/users?q=Tony

  async handleRequestGithubApi(event) {
    await axios.get(`https://api.github.com/users/${this.state.username}`).then((response) => {
      this.setState({
        avatarUrl: response.data.avatar_url,
        bio: response.data.bio,
        nbFollowers: response.data.followers,
        nbRepos: response.data.public_repos,
        usernameValidated: this.state.username,
      });
    }).catch((error) => console.log(error));
  }

  render() {
    return (
        <div className="card">
            <div className="github-infos-user-widget">
              <div>{this.state.usernameValidated}</div>
              <img src={this.state.avatarUrl} alt="avatar"/>
              <div>{this.state.bio}</div>
              <div>{this.state.nbFollowers}</div>
              <div>{this.state.nbRepos}</div>
              <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input className="form-control" type="text" name="username" id="username" placeholder="Enter your Username" value={this.state.username} onChange={this.handleChangeUsername} required/>
              </div>
              <button onClick={this.handleRequestGithubApi}>Get Infos</button>
            </div>
        </div>
    );
  }
}

export default withRouter(GithubInfosUser);