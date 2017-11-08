import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherInfo } from '../actions/fetchWeather';
import '../styles/WeatherInfo.css';

export class WeatherInfo extends Component {
  render() {
    return (
      <div className="www_weather-today-box-weather-section__weather-info-container">
        <div className="www_weather-today-box-weather-section-image-and-slug-container">
          <img src={getWeatherInfo(this.props.info.text).weatherImage} width="50" height="35" alt={this.props.info.text+"icon-img"} /><br />
          <span>{this.props.info.text}</span><br />
        </div>
        <div className="www_weather-today-box-weather-section__info-section-bars-container">
          <div className="www_weather-today-box-weather-section__info-section-high-bar-container">
            <div className="www_weather-today-box-weather-section__info-section-high-bar" style={{display: 'block', height: this.props.info.high+'%', 'backgroundColor': 'red'}}></div>
          </div>
          <div className="www_weather-today-box-weather-section__info-section-low-bar-container">
            <div className="www_weather-today-box-weather-section__info-section-low-bar" style={{display: 'block', height: this.props.info.low+'%', 'backgroundColor': 'blue'}}></div>
          </div>
        </div>
        <span className="www_weather-today-box-weather-section__info-section-low-info">Low: {this.props.info.low}</span><span>High: {this.props.info.high}</span>  
      </div>
    );
  }
};

export default connect(null, null)(WeatherInfo);
