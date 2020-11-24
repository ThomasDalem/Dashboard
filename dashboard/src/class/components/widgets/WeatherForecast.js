import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const API_KEY = "2d72361715cd55cf0fe168aa6eb3e0e4";

function WeatherForecast() {
  const [temperature, setTemperature] = useState(0);
  const [weather, setWeather] = useState([]);

  /*useEffect(() => {
      const params = {appid: API_KEY, q: "paris", units: "metric"};
      axios.get("http://api.openweathermap.org/data/2.5/weather", {params: params}).then(data => {
        if (data.status === 200) {
          console.log(data.data);
        }
      }).catch(err => {
        console.log(err);
      });
  });*/

  return (
    <div className="weather-forecast-widget">
      <div>WeatherForecast</div>
    </div>
  );
}

export default withRouter(WeatherForecast);
