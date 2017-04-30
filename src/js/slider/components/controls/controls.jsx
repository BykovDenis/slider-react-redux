/**
 * Created by Denis on 18.04.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ changeSlide, active, arrControls }) => {
  const styles = require('./controls.scss');
  const controlList = arrControls.map((element, index) => (
    <label key={element}>
      <input
        type="radio"
        name="slide"
        className={styles.radio}
        checked={active === index}
        onClick={changeSlide}
        id={element}
      />
      <i id={element} className={styles.control} />
    </label>
  ));
  return (
    <div id="controls" className={styles.controls}>
      {controlList}
    </div>
  );
};

Controls.propTypes = {
  changeSlide: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
  arrControls: PropTypes.shape.isRequired
};


export default Controls;
