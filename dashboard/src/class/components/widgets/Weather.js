import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

const API_KEY = "2d72361715cd55cf0fe168aa6eb3e0e4";

function Weather(props) {
  const [temperature, setTemperature] = useState(5);
  const [humidity, setHumidity] = useState(0);
  const [weather, setWeather] = useState([]);
  const [iconID, setIconID] = useState(".");
  let userParams = {};

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
              widgetParams.data.widgets[0].celcius === true ? "metric" : "imperial",
          };
          userParams = widgetParams.data.widgets[0];
          axios
            .get("http://api.openweathermap.org/data/2.5/weather", {
              params: params,
            })
            .then((data) => {
              if (data.status === 200) {
                setTemperature(data.data.main.temp);
                setHumidity(data.data.main.humidity);
                setWeather(data.data.weather[0].main);
                setIconID(`http://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }).catch(err => {
        console.log(err);
      });
  });

  return (
    <div className="weather-widget">
      <span>Paris, </span>
      <span>
        {temperature} °{userParams.celcius === false ? "F" : "C"}
      </span>
      <img src={iconID} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps)(Weather));
