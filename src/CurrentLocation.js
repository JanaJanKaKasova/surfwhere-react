import React, { Component } from "react";
import PropTypes from "prop-types";

class CurrentLocation extends Component {
  static propTypes = {
    refresh: PropTypes.func.isRequired
  };

  _click(event) {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.refresh(position.coords.latitude, position.coords.longitude);
    });
  }

  render() {
    return (
      <button
        className="btn btn-info mr-sm-2"
        onClick={event => this._click(event)}
      >
        <i className="fas fa-location-arrow" />
      </button>
    );
  }
}

export default CurrentLocation;
