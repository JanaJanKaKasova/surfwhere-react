import React, { Component } from "react";

import App from "./App";
import WeatherIcon from "./WeatherIcon.js";

class Forecast extends Component {
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
