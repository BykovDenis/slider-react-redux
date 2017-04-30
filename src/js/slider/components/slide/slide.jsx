/**
 * Created by Denis on 18.04.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ slideData }) => {
  const styles = require('./slide.scss');
  return (
    <div className={styles.slide}>
      <a href="http://owm.io" className={styles.link}>
        <picture>
          <source media="(max-width: 370px)" srcSet={slideData.url_370} />
          <source media="(max-width: 768)" srcSet={slideData.url_768} />
          <source media="(max-width: 992px)" srcSet={slideData.url_992} />
          <source media="(max-width: 1200px)" srcSet={slideData.url_1200} />
          <source media="(min-width: 1201px)" srcSet={slideData.url} />
          <img src={slideData.url} alt={slideData.title} height="530" />
        </picture>
      </a>
      <div className={styles.slide__layout}>
        <h2 className={styles.slide__title}>{slideData.title}</h2>
        <p className={styles.slide__description}>
          {slideData.description}
        </p>
      </div>
      <a href="/vaneLanguage" className={styles['slider-btn']}>
        Try for free
      </a>
    </div>
  );
};

Slide.propTypes = {
  slideData: PropTypes.shape.isRequired
};

export default Slide;
