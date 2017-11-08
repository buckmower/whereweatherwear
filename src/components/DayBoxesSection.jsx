import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import DayBox from '../components/DayBox';
import TodayBox from '../components/TodayBox';
import '../styles/DayBox.css';

const DayBoxesSection = props => {
  return (
    <div>
      {
        props.forecast ? props.forecast.map((forecastDay, index) => {
          let r = index === 0 ? (<TodayBox info={forecastDay} key={index} index={index} title={props.title} />) : (<DayBox info={forecastDay} key={index} index={index} />);
          return r;
        }) : ""
      }
    </div>
  );
};


export default connect(null, null)(DayBoxesSection);
