import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/fetchWeather';
import DayBoxesSection from '../components/DayBoxesSection';
import '../styles/WeatherSection.css';

export class WeatherSection extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchWeather.call();
  }
  render() {
    return (
      <div className="www__weather-section-container">
        <h2>Where Are You:</h2>
        <label htmlFor="zipcodeInput">Zip Code or Name of City</label><br />
        <input className="www__weather-section_zipcode-input" id="zipcodeInput" name="zipcodeInput" defaultValue="92130" onChange={this.props.fetchWeather.bind(this)} />
        <DayBoxesSection forecast={this.props.forecast} title={this.props.title} />
        <br /><a href="https://www.yahoo.com/?ilc=401" target="_blank"> <img src="https://poweredby.yahoo.com/purple.png" width="134" height="29"/> </a>
      </div>
    );
  }
};

const mapStateToProps = store => {
  return {
    title: store.wwwResponse.message ? store.wwwResponse.message.title : "No Weather Data",
    forecast: store.wwwResponse.message ? store.wwwResponse.message.forecast : false
  };
};

const mapDispatchToProps = dispatch => ({
  fetchWeather: (event) => {
    let theZipCodeToFetchWeatherFor = event ? event.target.value : '92130';
    dispatch(fetchWeather(dispatch, theZipCodeToFetchWeatherFor));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherSection);
