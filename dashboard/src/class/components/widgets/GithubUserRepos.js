import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class GithubUserRepos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "TonyMarini",
      repoListName: [],
      repoListUrlClone: [],
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleRequestGithubApi = this.handleRequestGithubApi.bind(this);

    this.handleRequestGithubApi();
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  async handleRequestGithubApi(event) {
    await axios.get(`https://api.github.com/users/${this.state.username}/repos`).then((response) => {
      let list_repo_name = [];
      let list_repo_url_clone = [];
      response.data.forEach(element => {
        list_repo_name.push(element.name);
        list_repo_url_clone.push(element.clone_url);
      })
      this.setState({
        repoListName: list_repo_name,
        repoListUrlClone: list_repo_url_clone,
      });
    }).catch((error) => console.log(error));
  }

  render() {
    return (
        <div className="card">
            <div className="github-user-repos-widget">
              {this.state.repoListName}
              {this.state.repoListUrlClone}
              <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input className="form-control" type="text" name="username" id="username" placeholder="Enter your Username" value={this.state.username} onChange={this.handleChangeUsername} required/>
              </div>
              <button onClick={this.handleRequestGithubApi}>Search Users</button>
            </div>
        </div>
    );
  }
}

export default withRouter(GithubUserRepos);