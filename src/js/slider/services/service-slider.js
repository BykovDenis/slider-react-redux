/**
 * Created by Denis on 18.04.2017.
 */

/**
 * Функция возвращает объект слайдера с метаданными
  * @param object
 * @param id
 * @returns {{}}
 */
export const getSlideById = (object, id) => {
  let resElement = {};
  Object.keys(object).forEach((element, index) => {
    if (id === index) {
      resElement = object[element];
    }
  });
  return resElement;
};

/**
 * Функция возвращаем массив с идентивикаторами слайдов
 * @param object
 */
export const getSliderControls = (object) => {
  const arrSlidesId = [];
  Object.keys(object).forEach(element => arrSlidesId.push(element));
  return arrSlidesId;
};

/**
 * Функция возвращает номер слайда по идентификатору элемента
 * @param object
 * @param slideId
 * @returns {number}
 */
export const getNumSlideByName = (object, slideId) => {
  let numElement = -1;
  Object.keys(object).forEach((element, index) => {
    if (slideId === element) {
      numElement = index;
    }
  });
  return numElement;
};

/**
 * Функция определения количество слайдов в слайдере
 * @param object
 */
export const getLengthSlides = object => Object.keys(object).length;
