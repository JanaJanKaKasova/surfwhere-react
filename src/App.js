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

        <div class="row">
          <div class="col-md-2 border-right border-top border-bottom pt-3 pb-3 mb-5 day__block">
            <div class="day__block-date" />

            <div class="row-md-3 pt-3">
              <img class="day__block-image" />
            </div>
            <div class="row pt-3 mx-auto">
              <div class="weather-detail__text" id="weather-description" />
            </div>
            <div class="row pt-3 mx-auto day__block-temps">
              Max: <span class="day__block-temp day__block-temp--max" /> °C
            </div>
            <div class="row pt-0 mx-auto day__block-temps">
              Min: <span class="day__block-temp day__block-temp--min" /> °C
            </div>
            <div class="row pt-3 mx-auto">
              Wind: <span class="wind-speed" /> km/h
            </div>
            <div class="row pt-0 mx-auto">
              Direction: <span class="wind-direction" />°
            </div>
            <div class="row pt-3 mx-auto">surf: N/A</div>
            <div class="row pt-0 mx-auto">swell: N/A</div>
            <div class="row pt-O mx-auto">direction: N/A</div>
          </div>

          <div
            class="col-md-2 border-right border-top border-bottom pt-3 pb-3 mb-5 day__block"
            max="16"
            min="12"
            conditions="rainy"
          >
            <div class="day__block-date" />

            <div class="row-md-3 pt-3">
              <img class="day__block-image" />
            </div>
            <div class="row pt-3 mx-auto">
              <div class="weather-detail__text" id="weather-description" />
            </div>
            <div class="row pt-3 mx-auto day__block-temps">
              Max: <span class="day__block-temp day__block-temp--max" /> °C
            </div>
            <div class="row pt-0 mx-auto day__block-temps">
              Min: <span class="day__block-temp day__block-temp--min" /> °C
            </div>
            <div class="row pt-3 mx-auto">
              Wind: <span class="wind-speed" /> km/h
            </div>
            <div class="row pt-0 mx-auto">
              Direction: <span class="wind-direction" /> °
            </div>
            <div class="row pt-3 mx-auto">surf: N/A</div>
            <div class="row pt-0 mx-auto">swell: N/A</div>
            <div class="row pt-O mx-auto">direction: N/A</div>
          </div>

          <div
            class="col-md-2 border-right border-top border-bottom pt-3 pb-3 mb-5 day__block"
            max="18"
            min="15"
            conditions="partly cloudy"
          >
            <div class="day__block-date" />

            <div class="row-md-3 pt-3">
              <img class="day__block-image" />
            </div>
            <div class="row pt-3 mx-auto">
              <div class="weather-detail__text" id="weather-description" />
            </div>
            <div class="row pt-3 mx-auto day__block-temps">
              Max: <span class="day__block-temp day__block-temp--max" /> °C
            </div>
            <div class="row pt-0 mx-auto dday__block-temps">
              Min: <span class="day__block-temp day__block-temp--min" /> °C
            </div>
            <div class="row pt-3 mx-auto">
              Wind: <span class="wind-speed" /> km/h
            </div>
            <div class="row pt-0 mx-auto">
              Direction: <span class="wind-direction" /> °
            </div>
            <div class="row pt-3 mx-auto">surf: N/A</div>
            <div class="row pt-0 mx-auto">swell: N/A</div>
            <div class="row pt-O mx-auto">direction: N/A</div>
          </div>

          <div
            class="col-md-2 border-right border-top border-bottom pt-3 pb-3 mb-5 day__block"
            max="20"
            min="15"
            conditions="mostly sunny"
          >
            <div class="day__block-date" />

            <div class="row-md-3 pt-3">
              <img class="day__block-image" />
            </div>
            <div class="row pt-3 mx-auto">
              <div class="weather-detail__text" id="weather-description" />
            </div>
            <div class="row pt-3 mx-auto day__block-temps">
              Max: <span class="day__block-temp day__block-temp--max" /> °C
            </div>
            <div class="row pt-0 mx-auto day__block-temps">
              Min: <span class="day__block-temp day__block-temp--min" /> °C
            </div>
            <div class="row pt-3 mx-auto">
              Wind: <span class="wind-speed" /> km/h
            </div>
            <div class="row pt-0 mx-auto">
              Direction: <span class="wind-direction" /> °
            </div>
            <div class="row pt-3 mx-auto">surf: N/A</div>
            <div class="row pt-0 mx-auto">swell: N/A</div>
            <div class="row pt-O mx-auto">direction: N/A</div>
          </div>
          <div
            class="col-md-2 border-right border-top border-bottom pt-3 pb-3 mb-5 day__block"
            max="21"
            min="17"
            conditions="sunny"
          >
            <div class="day__block-date" />

            <div class="row-md-3 pt-3">
              <img class="day__block-image" />
            </div>
            <div class="row pt-3 mx-auto">
              <div class="weather-detail__text" id="weather-description" />
            </div>
            <div class="row pt-3 mx-auto day__block-temps">
              Max: <span class="day__block-temp day__block-temp--max" /> °C
            </div>
            <div class="row pt-0 mx-auto day__block-temps">
              Min: <span class="day__block-temp day__block-temp--min" /> °C
            </div>
            <div class="row pt-3 mx-auto">
              Wind: <span class="wind-speed" /> km/h
            </div>
            <div class="row pt-0 mx-auto">
              Direction: <span class="wind-direction" /> °
            </div>
            <div class="row pt-3 mx-auto">surf: N/A</div>
            <div class="row pt-0 mx-auto">swell: N/A</div>
            <div class="row pt-O mx-auto">direction: N/A</div>
          </div>
          <div
            class="col-md-2 border-top border-bottom pt-3 pb-3 mb-5 day__block"
            max="18"
            min="15"
            conditions="partly cloudy"
          >
            <div class="day__block-date" />

            <div class="row-md-3 pt-3">
              <img class="day__block-image" />
            </div>
            <div class="row pt-3 mx-auto">
              <div class="weather-detail__text" id="weather-description" />
            </div>
            <div class="row pt-3 mx-auto day__block-temps">
              Max: <span class="day__block-temp day__block-temp--max" /> °C
            </div>
            <div class="row pt-0 mx-auto day__block-temps">
              Min: <span class="day__block-temp day__block-temp--min" /> °C
            </div>
            <div class="row pt-3 mx-auto">
              Wind: <span class="wind-speed" /> km/h
            </div>
            <div class="row pt-0 mx-auto">
              Direction: <span class="wind-direction" /> °
            </div>
            <div class="row pt-3 mx-auto">surf: N/A</div>
            <div class="row pt-0 mx-auto">swell: N/A</div>
            <div class="row pt-O mx-auto">direction: N/A</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
