import React, { Component } from "react";
import "./App.css";
import CurrentLocation from "./CurrentLocation";

class SearchNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  _handleChange(event) {
    this.setState({ value: event.target.value });
  }

  _submit(event) {
    event.preventDefault();
    this.props.refresh(this.state.value);
  }

  render() {
    return (
      <div className="navbar navbar-light bg-light rounded">
        <span className="navbar-brand">Surfwhere Weather</span>

        <form className="form-inline text-right" id="weather__form">
          <CurrentLocation
            refresh={this.refreshWeatherFromLatitudeAndLongitude}
          />
          <input
            className="form-control mr-sm-2"
            id="weather__form-location"
            type="search"
            placeholder="Enter a place..."
            aria-label="Search"
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
