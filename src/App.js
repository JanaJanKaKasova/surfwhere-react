import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./App.css";
import WeatherIcon from "./WeatherIcon.js";
import SearchNav from "./SearchNav.js";
import DateUtil from "./DateUtil.js";
import Forecast from "./Forecast.js";

class App extends React.Component {
  state = {};

  static propTypes = {
    city: PropTypes.string.isRequired
  };

  static defaultProps = {
    city: "lisbon",
    apiUrl: "https://api.openweathermap.org",
    apiKey: "029474316bb793be56fc4dee0d85fa00"
  };

  constructor(props) {
    super(props);

    let apiParams = "appid=" + this.props.apiKey + "&units=metric";

    axios
      .get(
        this.props.apiUrl +
          "/data/2.5/weather?" +
          apiParams +
          "&q=" +
          this.props.city
      )
      .then(response => {
        this.setState({
          conditions: {
            city: response.data.name,
            description: response.data.weather[0].main,
            icon: response.data.weather[0].icon,
            precipitation: Math.round(response.data.main.humidity) + "%",
            temperature: Math.round(response.data.main.temp),
            time: new DateUtil(new Date(response.data.dt * 1000)).dayTime(),
            wind: Math.round(response.data.wind.speed) + "km/h",
            direction: Math.round(response.data.wind.direction) + "°"
          }
        });
      });
  }

  /* friendlyDate(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;

    return days[date.getDay()] + " " + date.getHours() + ":" + minutes;
  } */

  refresh = city => {
    this.refreshWeatherFromParams(`q=${city}`);
  };

  render() {
    if (this.state.conditions) {
      return (
        <div className="WeatherApp">
          <div>
            <SearchNav refresh={this.refreshWeatherFromCity} />
          </div>
          <div className="container weather-container weather-summary">
            <div className="row">
              <div className="col-md-5 pt-3">
                <div className="row-md-2 pt-3">
                  <div className="weather-summary-header">
                    <h3>{this.state.conditions.city}</h3>
                  </div>
                </div>
                <div className="row-md-2 pt-0 pb-0">
                  <div className="weather-detail__text">
                    {this.state.conditions.time} (WET)
                  </div>
                </div>
                <div className="row-md-2 pt-0 pb-5 lead">
                  <div className="weather-detail__text">
                    {this.state.conditions.description}
                  </div>
                </div>
              </div>

              <div className="col-md-1 pt-3">
                <div className="row-md-3 pt-3">
                  <WeatherIcon iconName={this.state.conditions.icon} />
                </div>
              </div>

              <div className="col-md-2 pt-3">
                <div className="row-md-3 pt-3">
                  <div className="clearfix">
                    <div className="weather-unit__text weather-unit__text--today">
                      {this.state.conditions.temperature} °C
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-2 pt-3" />

              <div className="col-md-2 pt-3">
                <div className="row-md-2 pt-4 weather-detail__text">
                  Precipitation: {this.state.conditions.precipitation}
                </div>
                <div className="row-md-2 pt-0 weather-detail__text">
                  Wind: {this.state.conditions.wind}
                </div>
                <div className="row-md-2 pt-0 pb-5 weather-detail__text">
                  Direction: {this.state.conditions.direction}
                </div>
              </div>
            </div>
          </div>
          <Forecast city={this.state.city} />
        </div>
      );
    } else {
      return <div>App is loading, please wait...</div>;
    }
  }
}

export default App;
