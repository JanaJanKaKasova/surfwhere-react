import React, { Component } from "react";
import axios from "axios";
import Api from "./Api";
import App from "./App";
import WeatherIcon from "./WeatherIcon.js";

class Forecast extends Component {
  state = {
    city: this.props.city
  };
  componentWillMount() {
    this.refresh();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ city: nextProps.city }, () => {
      this.refresh();
    });
  }

  refresh = () => {
    let url = `${Api.url}/data/2.5/forecast?appid=${Api.key}&units=metric&q=${
      this.state.city
    }`;

    axios.get(url).then(response => {
      let forecast = response.data.list;
      // The API returns the forecast every 3 hour, so we are exrtacting
      // the weather for every 24 hours which 8 times 3 hour cycles
      let dailyForecast = [7, 15, 23, 31, 39].map(index => {
        return {
          description: forecast[index].weather[0].main,
          icon: forecast[index].weather[0].icon,
          precipitation: Math.round(forecast[index].main.humidity) + "%",
          temperature: Math.round(forecast[index].main.temp),
          day: new DateUtil(new Date(forecast[index].dt * 1000)).day(true),
          wind: Math.round(forecast[index].wind.speed) + "km/h"
        };
      });
      this.setState({ forecast: dailyForecast });
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2 border-right border-top border-bottom pt-3 pb-3 mb-5 day__block">
            <div className="day__block-date" />

            <div className="row-md-3 pt-3">
              <img className="day__block-image" />
            </div>
            <div className="row pt-3 mx-auto">
              <div className="weather-detail__text" id="weather-description" />
            </div>
            <div className="row pt-3 mx-auto day__block-temps">
              Max: <span className="day__block-temp day__block-temp--max" /> °C
            </div>
            <div className="row pt-0 mx-auto day__block-temps">
              Min: <span className="day__block-temp day__block-temp--min" /> °C
            </div>
            <div className="row pt-3 mx-auto">
              Wind: <span className="wind-speed" /> km/h
            </div>
            <div className="row pt-0 mx-auto">
              Direction: <span className="wind-direction" />°
            </div>
            <div className="row pt-3 mx-auto">surf: N/A</div>
            <div className="row pt-0 mx-auto">swell: N/A</div>
            <div className="row pt-O mx-auto">direction: N/A</div>
          </div>

          <div
            className="col-md-2 border-right border-top border-bottom pt-3 pb-3 mb-5 day__block"
            max="16"
            min="12"
            conditions="rainy"
          >
            <div className="day__block-date" />

            <div className="row-md-3 pt-3">
              <img className="day__block-image" />
            </div>
            <div className="row pt-3 mx-auto">
              <div className="weather-detail__text" id="weather-description" />
            </div>
            <div className="row pt-3 mx-auto day__block-temps">
              Max: <span className="day__block-temp day__block-temp--max" /> °C
            </div>
            <div className="row pt-0 mx-auto day__block-temps">
              Min: <span className="day__block-temp day__block-temp--min" /> °C
            </div>
            <div className="row pt-3 mx-auto">
              Wind: <span className="wind-speed" /> km/h
            </div>
            <div className="row pt-0 mx-auto">
              Direction: <span className="wind-direction" /> °
            </div>
            <div className="row pt-3 mx-auto">surf: N/A</div>
            <div className="row pt-0 mx-auto">swell: N/A</div>
            <div className="row pt-O mx-auto">direction: N/A</div>
          </div>

          <div
            className="col-md-2 border-right border-top border-bottom pt-3 pb-3 mb-5 day__block"
            max="18"
            min="15"
            conditions="partly cloudy"
          >
            <div className="day__block-date" />

            <div className="row-md-3 pt-3">
              <img className="day__block-image" />
            </div>
            <div className="row pt-3 mx-auto">
              <div className="weather-detail__text" id="weather-description" />
            </div>
            <div className="row pt-3 mx-auto day__block-temps">
              Max: <span className="day__block-temp day__block-temp--max" /> °C
            </div>
            <div className="row pt-0 mx-auto dday__block-temps">
              Min: <span className="day__block-temp day__block-temp--min" /> °C
            </div>
            <div className="row pt-3 mx-auto">
              Wind: <span className="wind-speed" /> km/h
            </div>
            <div className="row pt-0 mx-auto">
              Direction: <span className="wind-direction" /> °
            </div>
            <div className="row pt-3 mx-auto">surf: N/A</div>
            <div className="row pt-0 mx-auto">swell: N/A</div>
            <div className="row pt-O mx-auto">direction: N/A</div>
          </div>

          <div
            className="col-md-2 border-right border-top border-bottom pt-3 pb-3 mb-5 day__block"
            max="20"
            min="15"
            conditions="mostly sunny"
          >
            <div className="day__block-date" />

            <div className="row-md-3 pt-3">
              <img className="day__block-image" />
            </div>
            <div className="row pt-3 mx-auto">
              <div className="weather-detail__text" id="weather-description" />
            </div>
            <div className="row pt-3 mx-auto day__block-temps">
              Max: <span className="day__block-temp day__block-temp--max" /> °C
            </div>
            <div className="row pt-0 mx-auto day__block-temps">
              Min: <span className="day__block-temp day__block-temp--min" /> °C
            </div>
            <div className="row pt-3 mx-auto">
              Wind: <span className="wind-speed" /> km/h
            </div>
            <div className="row pt-0 mx-auto">
              Direction: <span className="wind-direction" /> °
            </div>
            <div className="row pt-3 mx-auto">surf: N/A</div>
            <div className="row pt-0 mx-auto">swell: N/A</div>
            <div className="row pt-O mx-auto">direction: N/A</div>
          </div>
          <div
            className="col-md-2 border-right border-top border-bottom pt-3 pb-3 mb-5 day__block"
            max="21"
            min="17"
            conditions="sunny"
          >
            <div className="day__block-date" />

            <div className="row-md-3 pt-3">
              <img className="day__block-image" />
            </div>
            <div className="row pt-3 mx-auto">
              <div className="weather-detail__text" id="weather-description" />
            </div>
            <div className="row pt-3 mx-auto day__block-temps">
              Max: <span className="day__block-temp day__block-temp--max" /> °C
            </div>
            <div className="row pt-0 mx-auto day__block-temps">
              Min: <span className="day__block-temp day__block-temp--min" /> °C
            </div>
            <div className="row pt-3 mx-auto">
              Wind: <span className="wind-speed" /> km/h
            </div>
            <div className="row pt-0 mx-auto">
              Direction: <span className="wind-direction" /> °
            </div>
            <div className="row pt-3 mx-auto">surf: N/A</div>
            <div className="row pt-0 mx-auto">swell: N/A</div>
            <div className="row pt-O mx-auto">direction: N/A</div>
          </div>
          <div
            className="col-md-2 border-top border-bottom pt-3 pb-3 mb-5 day__block"
            max="18"
            min="15"
            conditions="partly cloudy"
          >
            <div className="day__block-date" />

            <div className="row-md-3 pt-3">
              <img className="day__block-image" />
            </div>
            <div className="row pt-3 mx-auto">
              <div className="weather-detail__text" id="weather-description" />
            </div>
            <div className="row pt-3 mx-auto day__block-temps">
              Max: <span className="day__block-temp day__block-temp--max" /> °C
            </div>
            <div className="row pt-0 mx-auto day__block-temps">
              Min: <span className="day__block-temp day__block-temp--min" /> °C
            </div>
            <div className="row pt-3 mx-auto">
              Wind: <span className="wind-speed" /> km/h
            </div>
            <div className="row pt-0 mx-auto">
              Direction: <span className="wind-direction" /> °
            </div>
            <div className="row pt-3 mx-auto">surf: N/A</div>
            <div className="row pt-0 mx-auto">swell: N/A</div>
            <div className="row pt-O mx-auto">direction: N/A</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forecast;
