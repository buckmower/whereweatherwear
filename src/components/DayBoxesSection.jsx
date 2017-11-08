import React from 'react';
import { connect } from 'react-redux';
import DayBox from '../components/DayBox';
import '../styles/DayBox.css';

const DayBoxesSection = props => {
  return (
    <div>
      {
        props.forecast ? props.forecast.map((forecastDay, index) => {
          return index > 0 ? <DayBox info={forecastDay} key={index} index={index} /> : null
        }) : ""
      }
    </div>
  );
};


export default connect(null, null)(DayBoxesSection);
