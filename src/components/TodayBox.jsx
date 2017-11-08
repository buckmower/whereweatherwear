import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherInfo from '../components/WeatherInfo';
import { getWeatherInfo } from '../actions/fetchWeather';
import '../styles/TodayBox.css';

export class TodayBox extends Component {
  render() {
    return (
      <div className="www__weather-today-box">
        <div className="www_weather-today-box-weather-section">
          <h3>The Weather Today</h3>
          <div>
            <h2>{this.props.title}</h2>
          </div>
          <div className="www_weather-today-box-weather-section__img-section">
            <img 
              src={getWeatherInfo(this.props.info.text).weatherImage} 
              width="300px" height="150px" alt={this.props.info.text+"-image"} />
          </div>
          <div className="www_weather-today-box-weather-section__info-section">
            <WeatherInfo info={this.props.info} />
          </div>
        </div>
      </div>
    );
  }
};

export default connect(null, null)(TodayBox);
