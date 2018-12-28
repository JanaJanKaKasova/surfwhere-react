import React, { Component } from "react";
import "./App.css";
import CurrentLocation from "./CurrentLocation";

class SearchNav extends Component {
  static defaultProps = {
    city: "lisbon",
    apiUrl: "https://api.openweathermap.org",
    apiKey: "029474316bb793be56fc4dee0d85fa00"
  };

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
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

  _handleChange(event) {
    this.setState({ value: event.state.value });
  }

  _submit(event) {
    event.preventDefault();
    this.props.refresh(this.state.value);
  }

  render() {
    return (
      <div className="navbar navbar-light bg-light rounded">
        <span className="navbar-brand">Surfwhere Weather</span>

        <form
          className="form-inline text-right"
          onClick={event => this._submit(event)}
        >
          <CurrentLocation
            refresh={this.refreshWeatherFromLatitudeAndLongitude}
          />
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Enter a place..."
            autoFocus="on"
            autoComplete="off"
            //onChange={event => this._handleChange(event)}
            //value={this.state.value}
          />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
            <span id="Searchbutton">Search</span>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchNav;
