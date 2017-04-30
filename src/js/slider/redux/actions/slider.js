/**
 * Created by Denis on 18.04.2017.
 */
import * as constants from '../constants/constants';
import initialState from '../initialState/initialState';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const urlSliderData = '/themes/owm/assets/data/mainpage-slider.json';
const timeout = 1800000;

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
    payload: data
  });
};

const getActionDataSlider = () => (dispatch) => {
  getHTTP(urlSliderData, responseDataSlider, dispatch);
  setInterval(() => {
    getHTTP(urlSliderData, responseDataSlider, dispatch);
  }, timeout);
};

export default getActionDataSlider;
