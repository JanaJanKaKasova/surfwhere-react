import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="navbar navbar-light bg-light rounded">
        <span className="navbar-brand">Surfwhere Weather</span>

        <form className="form-inline text-right" id="weather__form">
          <button id="weather-refresh" className="btn btn-info mr-sm-2">
            <i className="fas fa-location-arrow" />
          </button>
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

export default App;
