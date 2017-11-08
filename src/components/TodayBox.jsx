import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WeatherInfo from '../components/WeatherInfo';
import { getWeatherInfo } from '../actions/fetchWeather';
import outfits from "../styles/outfits.json";
import '../styles/TodayBox.css';

const TodayBox = props => {
  return (
    <div className="www__weather-today-box">
      <div className="www_weather-today-box-weather-section">
        <h3>The Weather Today</h3>
        <div>
          <h2>{props.title}</h2>
        </div>
        <div className="www_weather-today-box-weather-section__img-section">
          <img 
            src={getWeatherInfo(props.info.text).weatherImage} 
            width="300px" height="150px" alt={props.info.text+"-image"} />
        </div>
        <div className="www_weather-today-box-weather-section__info-section">
          <WeatherInfo info={props.info} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  getWeatherInfo: (weatherSlug) => {
    dispatch(getWeatherInfo(weatherSlug));
  }
};

export default connect(null, mapDispatchToProps)(TodayBox);
