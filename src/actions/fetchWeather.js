import axios from 'axios';
import * as FWActionTypes from '../actiontypes/fetchWeather';
import cloudy from '../images/cloudy.jpg';
import rainy from '../images/rainy.png';
import sunny from '../images/sunny.jpg';
import cloudyClothes from '../images/cloudyClothes.jpg';
import rainyClothes from '../images/rainyClothes.jpg';
import sunnyClothes from '../images/sunnyClothes.jpg';

const requestPosts = function requestPosts(request) {
  return {
    type: FWActionTypes.REQUEST_POSTS,
    request
  };
};

const receivePosts = function receivePosts(response) {
  return {
    type: FWActionTypes.RECEIVE_POSTS,
    response: response,
    receivedAt: Date.now()
  };
};

const weatherPost = function weatherPost(dispatch, fetchParams) {
  const requestURL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D'"+fetchParams.zipCode+"')&format=json";
  return axios.get(requestURL)
    .then((response) => {
      dispatch(receivePosts(response));
    }).catch((error) => {
      dispatch(receivePosts({ ok: false, status: 404, message: error }));
    });
};

const fetchWeather = function fetchWeather(dispatch, zipCode = '') {
  const fetchParams = {
    zipCode: zipCode
  };
  dispatch(requestPosts(zipCode));
  weatherPost(dispatch, fetchParams);
  return {
    type: 'www/FETCH_WEATHER',
    zipCode,
    requestPosts
  };
};

const getWeatherInfo = (weatherSlug) => {
  switch (weatherSlug) {
    case "Sunny" : return {weatherImage: sunny, clothesImage: sunnyClothes}
    case "Mostly Sunny" : return {weatherImage: sunny, clothesImage: sunnyClothes}
    case "Clear" : return {weatherImage: sunny, clothesImage: sunnyClothes}
    case "Mostly Clear" : return {weatherImage: sunny, clothesImage: sunnyClothes}
    case "Partly Cloudy" : return {weatherImage: cloudy, clothesImage: cloudyClothes}
    case "Cloudy" : return {weatherImage: cloudy, clothesImage: cloudyClothes}
    case "Mostly Cloudy" : return {weatherImage: cloudy, clothesImage: cloudyClothes}
    case "Showers" : return {weatherImage: rainy, clothesImage: rainyClothes}
    case "Rain" : return {weatherImage: rainy, clothesImage: rainyClothes}
    case "Scattered Showers" : return {weatherImage: rainy, clothesImage: rainyClothes}
    case "Scattered Thunderstorms" : return {weatherImage: rainy, clothesImage: rainyClothes}
    case "Thunderstorms" : return {weatherImage: rainy, clothesImage: rainyClothes}
    default : return {weatherImage: null, clothesImage: null}
  }
};

export { weatherPost, fetchWeather, requestPosts, receivePosts, getWeatherInfo };
