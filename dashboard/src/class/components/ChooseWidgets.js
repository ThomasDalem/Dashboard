import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

class ChooseWidgets extends Component {
  constructor(props) {
      super(props);

      this.handleAddService = this.handleAddService.bind(this);
  }

  async handleAddService(id) {
    switch(id) {
      case 1:
        //call to post widget
        //if (post success)
        ToastsStore.success("Weather Added");
        //else
        //
    }
    console.log(id);
  }

  render() {
    return (
        <div className="add-widget">
          <h1>Services</h1>
          <div className="card-field">
            <div className="card">
              <div className="up-side">
                <div className="service-icon">
                  <box-icon type="solid" name="sun" color="yellow" size="lg"></box-icon>
                </div>
                <h2 className="title-service">
                  Weather
                </h2>
              </div>
              <div className="down-side">
                <button className="btn-add" onClick={() => this.handleAddService(1)}>Add</button>
              </div>
            </div>

            <div className="card">
              <div className="up-side">
                <div className="service-icon">
                  <box-icon name="time-five" color="black" size="lg"></box-icon>
                </div>
                <h2 className="title-service">
                  Time Zone
                </h2>
              </div>
              <div className="down-side">
                <button className="btn-add" onClick={() => this.handleAddService(1)}>Add</button>
              </div>
            </div>

            <div className="card">
              <div className="up-side">
                <div className="service-icon">
                  <box-icon name="dollar" color="green" size="lg"></box-icon>
                </div>
                <h2 className="title-service">
                  Money Converter
                </h2>
              </div>
              <div className="down-side">
                <button className="btn-add" onClick={() => this.handleAddService(1)}>Add</button>
              </div>
            </div>

            <div className="card">
              <div className="up-side">
                <div className="service-icon">
                  <box-icon type="logo" name="youtube" color="red" size="lg"></box-icon>
                </div>
                <h2 className="title-service">
                  Youtube
                </h2>
              </div>
              <div className="down-side">
                <button className="btn-add" onClick={() => this.handleAddService(1)}>Add</button>
              </div>
            </div>
          </div>
        <ToastsContainer className="toast-cst" store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER}/>
        </div>
    );
  }
}

export default withRouter(ChooseWidgets);