import React from "react";
import "./App.css";
import SearchNav from "./SearchNav";

class App extends React.Component {
  render() {
    return (
      <div className="WeatherApp">
        <div>
          <SearchNav />
        </div>
        <div className="container weather-container weather-summary">
          <div className="row">
            <div className="col-md-5 pt-3">
              <div className="row-md-2 pt-3">
                <div className="weather-summary-header">
                  <h3 id="weather-location">Lisbon</h3>
                </div>
              </div>
              <div className="row-md-2 pt-0 pb-0">
                <div className="weather-detail__text">
                  <span id="weather-date">15:03</span> (WET)
                </div>
              </div>
              <div className="row-md-2 pt-0 pb-5 lead">
                <div className="weather-detail__text">
                  <span id="weather-description">clear sky</span>
                </div>
              </div>
            </div>

            <div className="col-md-1 pt-3">
              <div className="row-md-3 pt-3">
                <img src="" className="weather__icon weather__icon--today" />
              </div>
            </div>

            <div className="col-md-2 pt-3">
              <div className="row-md-3 pt-3">
                <div className="clearfix">
                  <div className="weather-temp weather-temp--today">13</div>
                  <div className="weather-unit__text weather-unit__text--today">
                    °C
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 pt-3" />

            <div className="col-md-2 pt-3">
              <div className="row-md-2 pt-4 weather-detail__text">
                Humidity: <span id="precipitation-probality">0</span>%
              </div>
              <div className="row-md-2 pt-0 weather-detail__text">
                Wind: <span id="wind-speed" /> km/h
              </div>
              <div className="row-md-2 pt-0 pb-5 weather-detail__text">
                Direction: <span id="wind-direction" />
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
