import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./App.css";
import SearchNav from "./SearchNav";
import WeatherIcon from "./WeatherIcon";

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
    this.refreshWeatherFromCity(this.props.city);
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
          wind: Math.round(response.data.wind.speed) + "km/h"
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
                  {this.state.conditions.temperature}
                  <div className="weather-unit__text weather-unit__text--today">
                    °C
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 pt-3" />

            <div className="col-md-2 pt-3">
              <div className="row-md-2 pt-4 weather-detail__text">
                Precipitation: {this.state.conditions.precipitation} %
              </div>
              <div className="row-md-2 pt-0 weather-detail__text">
                Wind: {this.state.conditions.wind} km/h
              </div>
              <div className="row-md-2 pt-0 pb-5 weather-detail__text">
                Direction: {this.state.conditions.wind}
              </div>
            </div>
          </div>
        </div>

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

export default App;
