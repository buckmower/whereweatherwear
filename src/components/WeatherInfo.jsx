import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWeatherInfo } from '../actions/fetchWeather';
import '../styles/WeatherInfo.css';

const WeatherInfo = props => {
  return (
    <div className="www_weather-today-box-weather-section__weather-info-container">
      <div className="www_weather-today-box-weather-section-image-and-slug-container">
        <img src={getWeatherInfo(props.info.text).weatherImage} width="50" height="35" /><br />
        <span>{props.info.text}</span><br />
      </div>
      <div className="www_weather-today-box-weather-section__info-section-bars-container">
        <div className="www_weather-today-box-weather-section__info-section-high-bar-container">
          <div className="www_weather-today-box-weather-section__info-section-high-bar" style={{display: 'block', height: props.info.high+'%', 'backgroundColor': 'red'}}></div>
        </div>
        <div className="www_weather-today-box-weather-section__info-section-low-bar-container">
          <div className="www_weather-today-box-weather-section__info-section-low-bar" style={{display: 'block', height: props.info.low+'%', 'backgroundColor': 'blue'}}></div>
        </div>
      </div>
      <span className="www_weather-today-box-weather-section__info-section-low-info">Low: {props.info.low}</span><span>High: {props.info.high}</span>  
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  getWeatherInfo: (weatherSlug) => {
    dispatch(getWeatherInfo(weatherSlug));
  }
};

export default connect(null, mapDispatchToProps)(WeatherInfo);
