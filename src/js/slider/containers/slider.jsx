import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// модуль комбинирования работы нескольких актшионов
import { bindActionCreators } from 'redux';
import getActionDataSlider from '../redux/actions/slider';
// Подключаем модуль с сервисом получения и обработки данных сладеров
import * as serviceSlider from '../services/service-slider';
// Подключаем дочерние компоненты
import Slide from '../components/slide/slide';
import Controls from '../components/controls/controls';
import ReSelect from '../components/reselect/reselect';

class Slider extends Component {
  static get propTypes() {
    return {
      currentStore: PropTypes.object.isRequired,
      sliderReducer: PropTypes.object.isRequired,
      getDataSlider: PropTypes.func.isRequired
    };
  }
  constructor(props) {
    super(props);
    this.state = { curSlide: 0 };
    this.changeSlide = this.changeSlide.bind(this);
    this.autoChangeSlide = this.autoChangeSlide.bind(this);
  }
  componentWillMount() {
    this.props.getDataSlider();
  }
  componentDidMount() {
    this.interval = setInterval(this.autoChangeSlide, 3000);
  }
  /**
   * Метод смены слайдов по клику
   * @param e
   */
  changeSlide(e) {
    clearInterval(this.interval);
    this.interval = setInterval(this.autoChangeSlide, 3000);
    this.setState({
      curSlide: serviceSlider.getNumSlideByName(this.props.currentStore.sliderReducer, e.target.id)
    });
  }
  /**
   * Метод для смены слайдов по таймауту
   */
  autoChangeSlide() {
    const sliderLength = serviceSlider.getLengthSlides(this.props.currentStore.sliderReducer);
    if (this.state.curSlide + 1 >= sliderLength) {
      this.setState({ curSlide: 0 });
    } else {
      this.setState({ curSlide: this.state.curSlide + 1 });
    }
  }
  render() {
    const styles = require('./slider.scss');
    this.slides = Object.keys(this.props.currentStore.sliderReducer).map((elem, index) => {
      console.log(this.state.curSlide);
      const domElement = (<Slide
        slideData={this.props.currentStore.sliderReducer[elem]}
        visible={this.state.curSlide === index}
        key={elem}
      />);
      return domElement;
    });
    return (
      <div className={styles['main-slider']}>
        {this.slides}
        <Controls
          changeSlide={this.changeSlide}
          active={this.state.curSlide}
          arrControls={serviceSlider.getSliderControls(this.props.currentStore.sliderReducer)}
        />
        <ReSelect />
      </div>
    );
  }
}

const getDataSliderProps = dispatch => (
  { getDataSlider: bindActionCreators(getActionDataSlider, dispatch) }
);

export default connect(
  state => ({ currentStore: state }),
  getDataSliderProps
)(Slider);
