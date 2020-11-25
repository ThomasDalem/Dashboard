import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import GitHubLogin from 'react-github-login';
import MoneyConverter from './widgets/MoneyConverter';
import Weather from './widgets/Weather';
import WeatherForecast from './widgets/WeatherForecast';
import GithubUserRepos from './widgets/GithubUserRepos';
import GithubInfosUser from './widgets/GithubInfosUser';
import GithubSearchUsers from './widgets/GithubSearchUsers';

class ChooseWidgets extends Component {
  constructor(props) {
      super(props);

      this.state = {
        githubServiceEnable: true // false / get depuis les providers
      };
      this.handleAddService = this.handleAddService.bind(this);
      this.displaySuccessToast = this.displaySuccessToast.bind(this);
      this.displayFailToast = this.displayFailToast.bind(this);
      this.addWidgetToList = this.addWidgetToList.bind(this);
      this.connectToGithubSuccess = this.connectToGithubSuccess.bind(this);
      this.connectToGithubFailure = this.connectToGithubFailure.bind(this);
  }

  displaySuccessToast(id) {
    switch(id) {
      case 1: ToastsStore.success("Weather widget added"); break;
      case 2: ToastsStore.success("Weather Forecast widget added"); break;
      case 3: ToastsStore.success("Time Zone widget added"); break;
      case 4: ToastsStore.success("Github Search Users widget added"); break;
      case 5: ToastsStore.success("Github User Repos widget added"); break;
      case 6: ToastsStore.success("Github Infos User widget added"); break;
      default: ToastsStore.success("Unknown widget added");
    }
  }

  displayFailToast(id) {
    switch(id) {
      case 1: ToastsStore.error("Weather widget not added"); break;
      case 2: ToastsStore.error("Weather Forecast widget not added"); break;
      case 3: ToastsStore.error("Time Zone widget not added"); break;
      case 4: ToastsStore.error("Github Search Users widget not added"); break;
      case 5: ToastsStore.error("Github User Repos widget not added"); break;
      case 6: ToastsStore.error("Github Infos User widget not added"); break;
      default: ToastsStore.error("Unknown widget not added");
    }
  }

  addWidgetToList(id) {
    switch(id) {
      case 1: this.props.widgets.push(<Weather />); break;
      case 2: this.props.widgets.push(<WeatherForecast />); break;
      case 3: this.props.widgets.push(<MoneyConverter />); break;
      case 4: this.props.widgets.push(<GithubSearchUsers />); break;
      case 5: this.props.widgets.push(<GithubUserRepos />); break;
      case 6: this.props.widgets.push(<GithubInfosUser />); break;
      default: return;
    }
  }

  async handleAddService(id) {
    this.addWidgetToList(id);
    this.displaySuccessToast(id);
    //faire la requete: si elle success -> addWidget and display successToast | sinon display failToast
  }

  connectToGithubSuccess(response) {
    // request to enable add the github sevice
    this.setState({githubServiceEnable: true});
  }

  connectToGithubFailure(response) {
    console.log("Connection fail !");
  }

  render() {
    return (
        <div className="add-widget">
          <h1>Services</h1>
          <div className="fill-height">
            <div className="card-field">
              <div className="service">
                <div className="service-title">
                  <div>
                    <box-icon type="solid" name="sun" color="yellow" size="lg"></box-icon>
                  </div>
                  <h2 className="service-name">
                    Weather
                  </h2>
                </div>
                <div className="service-content">
                  <div className="card">
                    <div className="up-side">
                      <div>
                        <box-icon type="solid" name="sun" color="yellow" size="lg"></box-icon>
                      </div>
                      <h3 className="title-widget">
                        Weather
                      </h3>
                    </div>
                    <div className="down-side">
                      <button className="btn-add" onClick={() => this.handleAddService(1)}>Add</button>
                    </div>
                  </div>

                  <div className="card">
                    <div className="up-side">
                      <div>
                        <box-icon name="cloud-snow" color="white" size="lg"></box-icon>
                      </div>
                      <h3 className="title-widget">
                        Weather Forecast
                      </h3>
                    </div>
                    <div className="down-side">
                      <button className="btn-add" onClick={() => this.handleAddService(2)}>Add</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service">
                <div className="service-title">
                  <div>
                    <box-icon name="dollar-circle" type="solid" color="yellow" size="lg"></box-icon>
                  </div>
                  <h2 className="service-name">
                    Money Converter
                  </h2>
                </div>
                <div className="service-content">
                  <div className="card">
                    <div className="up-side">
                      <div>
                        <box-icon name="dollar" color="green" size="lg"></box-icon>
                      </div>
                      <h3 className="title-widget">
                        Money Converter
                      </h3>
                    </div>
                    <div className="down-side">
                      <button className="btn-add" onClick={() => this.handleAddService(3)}>Add</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service">
                <div className="service-title">
                    <div className='color-github-bg'>
                      <box-icon type="logo" name="github" color="black" size="lg"></box-icon>
                    </div>
                    <h2 className="service-name">
                      GitHub
                    </h2>
                    <div className="btn-github">
                      <GitHubLogin
                        clientId="d07e330f84e825a065f1"
                        redirectUri=""
                        onSuccess={this.connectToGithubSuccess}
                        onFailure={this.connectToGithubFailure}/>
                      </div>
                  </div>
                  {this.state.githubServiceEnable === true ?
                  <div className="service-content">
                    <div className="card">
                      <div className="up-side">
                        <div>
                          <box-icon name="search-alt-2" color="black" size="lg"></box-icon>
                        </div>
                        <h3 className="title-widget">
                          GitHub Search Users
                        </h3>
                      </div>
                      <div className="down-side">
                        <button className="btn-add" onClick={() => this.handleAddService(4)}>Add</button>
                      </div>
                    </div>
                    <div className="card">
                      <div className="up-side">
                        <div>
                          <box-icon name="git-repo-forked" color="black" size="lg"></box-icon>
                        </div>
                        <h3 className="title-widget">
                          GitHub User Repos
                        </h3>
                      </div>
                      <div className="down-side">
                        <button className="btn-add" onClick={() => this.handleAddService(5)}>Add</button>
                      </div>
                    </div>
                    <div className="card">
                      <div className="up-side">
                        <div>
                          <box-icon name="user-account" type="solid" color="black" size="lg"></box-icon>
                        </div>
                        <h3 className="title-widget">
                          GitHub Infos User
                        </h3>
                      </div>
                      <div className="down-side">
                        <button className="btn-add" onClick={() => this.handleAddService(6)}>Add</button>
                      </div>
                    </div>
                </div>
                : null}
              </div>
            </div>
          </div>
        <ToastsContainer className="toast-cst" store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER}/>
        </div>
    );
  }
}

export default withRouter(ChooseWidgets);