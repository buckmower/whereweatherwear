import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWeatherInfo } from '../actions/fetchWeather';
import moment from 'moment';
import '../styles/WhatToWear.css';

const WhatToWear = props => {
  return (
    <div className="www_weather-today-box-what-to-wear-section">
      <h3>What to Wear</h3>
      <br />
      {<img src={getWeatherInfo(props.info.text).clothesImage} width="auto" height="500px" alt={props.info.text+"-what-to-wear-image"} />}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  getWeatherInfo: (weatherSlug) => {
    dispatch(getWeatherInfo(weatherSlug));
  }
};

export default connect(null, null)(WhatToWear);
