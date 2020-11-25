import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class GithubSearchUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "TonyMarini",
      usernameList: [],
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleRequestGithubApi = this.handleRequestGithubApi.bind(this);

    this.handleRequestGithubApi();
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  //https://api.github.com/users/TonyMarini/repos

  async handleRequestGithubApi(event) {
    await axios.get(`https://api.github.com/search/users?q=${this.state.username}`).then((response) => {
      let list_username = [];
      response.data.items.forEach(element => {list_username.push(element.login)})
      this.setState({usernameList: list_username});
    }).catch((error) => console.log(error));
  }

  render() {
    return (
        <div className="card">
            <div className="github-search-users-widget">
              {this.state.usernameList}
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

export default withRouter(GithubSearchUsers);