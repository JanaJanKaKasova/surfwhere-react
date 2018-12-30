import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./App.css";
import WeatherIcon from "./WeatherIcon.js";
import SearchNav from "./SearchNav.js";
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
    //this.refreshWeatherFromCity(this.props.city);
    this.refreshWeatherFromUrl(
      this.props.apiUrl +
        "/data/2.5/weather?" +
        "appid=" +
        this.props.apiKey +
        "&units=metric" +
        "&q=" +
        this.props.city
    );
  }

  friendlyDate(date) {
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
  }

  /* weekDays(date) {
    return date.getDay();
  } */

  refreshWeatherFromUrl(url) {
    axios.get(url).then(response => {
      this.setState({
        conditions: {
          city: response.data.name,
          description: response.data.weather[0].main,
          icon: response.data.weather[0].icon,
          precipitation: Math.round(response.data.main.humidity) + "%",
          temperature: Math.round(response.data.main.temp),
          time: this.friendlyDate(new Date()),
          wind: Math.round(response.data.wind.speed) + "km/h",
          direction: Math.round(response.data.wind.direction) + "°",
          max: Math.round(response.data.main.temp_max),
          min: Math.round(response.data.main.temp_min)
        }
      });
    });
  }

  refreshWeatherFromLatitudeAndLongitude = (latitude, longitude) => {
    this.refreshWeatherFromUrl(
      this.props.apiUrl +
        "/data/2.5/weather?" +
        "appid=" +
        this.props.apiKey +
        "&units=metric" +
        "&lat=" +
        latitude +
        "&lon=" +
        longitude
    );
  };

  refreshWeatherFromCity = city => {
    this.refreshWeatherFromUrl(
      this.props.apiUrl +
        "/data/2.5/weather?" +
        "appid=" +
        this.props.apiKey +
        "&units=metric" +
        "&q=" +
        city
    );
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
                    {this.state.conditions.time}
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
          <Forecast /* city={this.state.city} */ />
        </div>
      );
    } else {
      return <div>App is loading, please wait...</div>;
    }
  }
}

export default App;
