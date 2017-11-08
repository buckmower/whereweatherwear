import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/fetchWeather';
import TodayBox from '../components/TodayBox';
import WhatToWear from '../components/WhatToWear';
import DayBoxesSection from '../components/DayBoxesSection';
import logo from '../logo.svg';
import '../styles/WeatherSection.css';

export class WeatherSection extends Component {
  componentWillMount() {
    this.props.fetchWeather.call();
  }
  render() {
    return (
      <div className="www__weather-section-container">
        <div className="www__weather-section__weather-today-container">
          <div className="www__weather-section__weather-today-container-weather">
            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <h2>Where Are You:</h2>
            <label htmlFor="zipcodeInput">Zip Code or Name of City</label><br />
            <input className="www__weather-section_zipcode-input" id="zipcodeInput" name="zipcodeInput" defaultValue="92130" onChange={this.props.fetchWeather.bind(this)} />
            <TodayBox info={this.props.forecastDay} title={this.props.title} />
          </div>
          <div className="www__weather-section__weather-today-container-what-to-wear">
            <WhatToWear info={this.props.forecastDay} />
          </div>
        </div>
        <DayBoxesSection forecast={this.props.forecast} title={this.props.title} />
        <br /><a href="https://www.yahoo.com/?ilc=401" target="_blank" rel="noopener noreferrer"> <img src="https://poweredby.yahoo.com/purple.png" width="134" height="29" alt="powered-by-yahoo" /> </a>
      </div>
    );
  }
};

const mapStateToProps = store => {
  return {
    title: store.wwwResponse.title,
    forecast: store.wwwResponse.forecast,
    forecastDay: store.wwwResponse.forecastToday
  };
};

const mapDispatchToProps = dispatch => ({
  fetchWeather: (event) => {
    let theZipCodeToFetchWeatherFor = event ? event.target.value : '92130';
    dispatch(fetchWeather(dispatch, theZipCodeToFetchWeatherFor));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherSection);
