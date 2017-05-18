/**
 * Created by Denis on 18.04.2017.
 */
import { normalize, schema } from 'normalizr';
import * as constants from '../constants/constants';
import initialState from '../initialState/initialState';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const urlSliderData = '/themes/owm/assets/data/mainpage-slider.json';
const urlWeatherData = 'http://openweathermap.org/data/2.5/forecast/daily?id=524901&units=metric&appid=b1b15e88fa797225412429c1c50c122a1';
const timeout = 180000;

const getHTTP = (url, callback, dispatch) => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      callback(data, dispatch);
    });
};

const responseDataSlider = (data = initialState, dispatch) => {
  dispatch({
    type: constants.GET_SLIDER_DATA,
    payload: { sliderData: data }
  });
};

const responseDataWeather = (data = initialState, dispatch) => {
  const date = new schema.Entity('dt');
  const myScheme = { dates: [date] };
  dispatch({
    type: constants.GET_WEATHER_DATA,
    payload: { weatherData: normalize({ dates: data.list }, myScheme) }
  });
};

export const getActionDataSlider = () => (dispatch) => {
  getHTTP(urlSliderData, responseDataSlider, dispatch);
  setInterval(() => {
    getHTTP(urlSliderData, responseDataSlider, dispatch);
  }, timeout);
};

export const getWeatherData = () => (dispatch) => {
  getHTTP(urlWeatherData, responseDataWeather, dispatch);
  setInterval(() => {
    getHTTP(urlWeatherData, responseDataWeather, dispatch);
  }, timeout);
};
