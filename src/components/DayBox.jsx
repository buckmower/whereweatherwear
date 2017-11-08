import React from 'react';
import { connect } from 'react-redux';
import WeatherInfo from '../components/WeatherInfo';
import moment from 'moment';
import '../styles/DayBox.css';

const DayBox = props => {
  return (
    <div className="www__weather-day-box">
      <h3>{props.index === 0 ? "Today" : moment(props.info.date).format('dddd') +", "+ moment(props.info.date).format('MMMM Do, YYYY')}</h3>
      <br />
      <WeatherInfo info={props.info} />
    </div>
  );
};


export default connect(null, null)(DayBox);
