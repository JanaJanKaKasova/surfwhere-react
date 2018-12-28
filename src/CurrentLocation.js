import React, { Component } from "react";
import PropTypes from "prop-types";

class CurrentLocation extends Component {
  static propTypes = {
    refresh: PropTypes.func.isRequired
  };

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

  _click(event) {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.refresh(position.coords.latitude, position.coords.longitude);
    });
  }

  render() {
    return (
      <button id="weather-refresh" className="btn btn-info mr-sm-2">
        <i
          className="fas fa-location-arrow"
          onClick={event => this._click(event)}
        />
      </button>
    );
  }
}

export default CurrentLocation;
