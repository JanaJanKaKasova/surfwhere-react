import React from "react";
import "./App.css";
import SearchNav from "./SearchNav";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <SearchNav />
        </div>
        <div class="container weather-container weather-summary">
          <div class="row">
            <div class="col-md-5 pt-3">
              <div class="row-md-2 pt-3">
                <div class="weather-summary-header">
                  <h3 id="weather-location">Lisbon</h3>
                </div>
              </div>
              <div class="row-md-2 pt-0 pb-0">
                <div class="weather-detail__text">
                  <span id="weather-date">15:03</span> (WET)
                </div>
              </div>
              <div class="row-md-2 pt-0 pb-5 lead">
                <div class="weather-detail__text">
                  <span id="weather-description">clear sky</span>
                </div>
              </div>
            </div>

            <div class="col-md-1 pt-3">
              <div class="row-md-3 pt-3">
                <img src="" class="weather__icon weather__icon--today" />
              </div>
            </div>

            <div class="col-md-2 pt-3">
              <div class="row-md-3 pt-3">
                <div class="clearfix">
                  <div class="weather-temp weather-temp--today">13</div>
                  <div class="weather-unit__text weather-unit__text--today">
                    °C
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-2 pt-3" />

            <div class="col-md-2 pt-3">
              <div class="row-md-2 pt-4 weather-detail__text">
                Humidity: <span id="precipitation-probality">0</span>%
              </div>
              <div class="row-md-2 pt-0 weather-detail__text">
                Wind: <span id="wind-speed" /> km/h
              </div>
              <div class="row-md-2 pt-0 pb-5 weather-detail__text">
                Direction: <span id="wind-direction" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
