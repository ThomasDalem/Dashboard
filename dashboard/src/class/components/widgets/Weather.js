import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

const API_KEY = "2d72361715cd55cf0fe168aa6eb3e0e4";

function Weather(props) {
  const [temperature, setTemperature] = useState(5);
  const [humidity, setHumidity] = useState(0);
  const [weather, setWeather] = useState([]);
  const [iconID, setIconID] = useState(
    "https://openweathermap.org/img/wn/10d@2x.png"
  );
  const [userParams, setUserParams] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4200/weather-widget", {
        headers: { Authorization: props.user.token },
      })
      .then((widgetParams) => {
        if (widgetParams.status === 200) {
          const params = {
            appid: API_KEY,
            q: widgetParams.data.widgets[0].city,
            units:
              widgetParams.data.widgets[0].celcius === true
                ? "metric"
                : "imperial",
          };
          setUserParams(widgetParams.data.widgets[0]);
          axios
            .get("https://api.openweathermap.org/data/2.5/weather", {
              params: params,
            })
            .then((data) => {
              if (data.status === 200) {
                setTemperature(Math.round(data.data.main.temp));
                setHumidity(data.data.main.humidity);
                setWeather(data.data.weather[0].main);
                setIconID(
                  `http://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`
                );
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [temperature, iconID]);

  return (
    <div className="widget">
      <div className="title">
        <div className="city"><i className="fa fa-map-marker"></i> {userParams.city}</div>
      </div>
      <div className="weather-widget">
        <div className="infos">
          <span className="temp">{temperature}°</span>
          <span>{userParams.celcius === true ? "C" : "F"}</span>
          <div className="weather-text">{weather}</div>
        </div>
        <img className="icon" src={iconID} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps)(Weather));
