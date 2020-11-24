import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import TimeZone from '../components/widgets/TimeZone';
import Weather from '../components/widgets/Weather';
import WeatherForecast from '../components/widgets/WeatherForecast';
import YoutubeNbViews from '../components/widgets/YoutubeNbViews';
import YoutubeNbSubscibers from '../components/widgets/YoutubeNbSubscibers';
import YoutubeLastVideo from '../components/widgets/YoutubeLastVideo';

class ChooseWidgets extends Component {
  constructor(props) {
      super(props);

      this.handleAddService = this.handleAddService.bind(this);
      this.displaySuccessToast = this.displaySuccessToast.bind(this);
      this.displayFailToast = this.displayFailToast.bind(this);
      this.addWidgetToList = this.addWidgetToList.bind(this);
  }

  displaySuccessToast(id) {
    switch(id) {
      case 1: ToastsStore.success("Weather widget added"); break;
      case 2: ToastsStore.success("Weather Forecast widget added"); break;
      case 3: ToastsStore.success("Time Zone widget added"); break;
      case 4: ToastsStore.success("Youtube Views widget added"); break;
      case 5: ToastsStore.success("Youtube Last Video widget added"); break;
      case 6: ToastsStore.success("Youtube Subscribes widget added"); break;
      default: ToastsStore.success("Unknown widget added");
    }
  }

  displayFailToast(id) {
    switch(id) {
      case 1: ToastsStore.error("Weather widget not added"); break;
      case 2: ToastsStore.error("Weather Forecast widget not added"); break;
      case 3: ToastsStore.error("Time Zone widget not added"); break;
      case 4: ToastsStore.error("Youtube Views widget not added"); break;
      case 5: ToastsStore.error("Youtube Last Video widget not added"); break;
      case 6: ToastsStore.error("Youtube Subscribes widget not added"); break;
      default: ToastsStore.error("Unknown widget not added");
    }
  }

  addWidgetToList(id) {
    switch(id) {
      case 1: this.props.widgets.push(<Weather />); break;
      case 2: this.props.widgets.push(<WeatherForecast />); break;
      case 3: this.props.widgets.push(<TimeZone />); break;
      case 4: this.props.widgets.push(<YoutubeNbViews />); break;
      case 5: this.props.widgets.push(<YoutubeLastVideo />); break;
      case 6: this.props.widgets.push(<YoutubeNbSubscibers />); break;
      default: return;
    }
  }

  async handleAddService(id) {
    this.addWidgetToList(id);
    this.displaySuccessToast(id);
    //faire la requete: si elle success -> addWidget and display successToast | sinon display failToast
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
                    <box-icon name="time-five" type="solid" color="white" size="lg"></box-icon>
                  </div>
                  <h2 className="service-name">
                    Time
                  </h2>
                </div>
                <div className="service-content">
                  <div className="card">
                    <div className="up-side">
                      <div>
                        <box-icon name="time" color="black" size="lg"></box-icon>
                      </div>
                      <h3 className="title-widget">
                        Time Zone
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
                    <div>
                      <box-icon type="logo" name="youtube" color="red" size="lg"></box-icon>
                    </div>
                    <h2 className="service-name">
                      Youtube
                    </h2>
                  </div>
                  <div className="service-content">
                    <div className="card">
                      <div className="up-side">
                        <div>
                          <box-icon name="glasses" color="black" size="lg"></box-icon>
                        </div>
                        <h3 className="title-widget">
                          Youtube Views
                        </h3>
                      </div>
                      <div className="down-side">
                        <button className="btn-add" onClick={() => this.handleAddService(4)}>Add</button>
                      </div>
                    </div>
                    <div className="card">
                      <div className="up-side">
                        <div>
                          <box-icon type="solid" name="movie-play" color="red" size="lg"></box-icon>
                        </div>
                        <h3 className="title-widget">
                          Youtube Last Video
                        </h3>
                      </div>
                      <div className="down-side">
                        <button className="btn-add" onClick={() => this.handleAddService(5)}>Add</button>
                      </div>
                    </div>
                    <div className="card">
                      <div className="up-side">
                        <div>
                          <box-icon name="street-view" color="blue" size="lg"></box-icon>
                        </div>
                        <h3 className="title-widget">
                          Youtube Subscribers
                        </h3>
                      </div>
                      <div className="down-side">
                        <button className="btn-add" onClick={() => this.handleAddService(6)}>Add</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        <ToastsContainer className="toast-cst" store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER}/>
        </div>
    );
  }
}

export default withRouter(ChooseWidgets);