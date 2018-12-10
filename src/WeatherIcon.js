import React, { Component } from "react";

class WeatherIcon extends Component {
  render() {
    let imgSrc =
      "http://openweathermap.org/img/w/" + this.props.iconName + ".png";

    <img
      className="weather__icon weather__icon--today"
      alt="weather icon"
      src={imgSrc}
    />;
  }
}

export default WeatherIcon;
