import PropTypes from 'prop-types';
import React, { Component } from 'react';
import arrow from '../../assets/images/arrow.svg';
import BottomPanel from '../shared/BottomPanel';

class BackgroundSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: ['first', 'second', 'third'],
      shown: 0,
      isBottomPanelOpened: false,
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.changeSlide();
    }, 5000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeSlide = () => {
    const { shown } = this.state;
    if (shown === 2) {
      this.setState({
        shown: 0,
      });
    } else {
      this.setState({
        shown: shown + 1,
      });
    }
  };

  isActiveSlide = (index) => {
    const { shown } = this.state;
    if (index === shown) {
      return 'active';
    }
    return '';
  };

  toggleBottomPanel = () => {
    const { isBottomPanelOpened } = this.state;
    this.setState({
      isBottomPanelOpened: !isBottomPanelOpened,
    });
  };

  setSlide = (number) => {
    this.setState({
      shown: number,
    });
  };

  render() {
    const { slides, isBottomPanelOpened } = this.state;
    const { children } = this.props;
    return (
      <div className="main__container">
        {children}
        {slides.map((item, index) => {
          return <div className={`slider-slide ${this.isActiveSlide(index)}`} key={index} />;
        })}
        <div className="main__text-box">
          <h1>Lampadari contemporanei</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore</p>
        </div>
        <div className={`main__bottom ${isBottomPanelOpened ? ' open' : ''}`}>
          {!isBottomPanelOpened ? (
            <div className="slider-dots__container">
              {slides.map((item, index) => {
                return (
                  <span
                    className={`slider-dot ${this.isActiveSlide(index)}`}
                    key={index}
                    onClick={() => this.setSlide(index)}
                  />
                );
              })}
            </div>
          ) : null}
          <button
            className={`toggle-bottom-panel__button ${isBottomPanelOpened ? ' open' : ''}`}
            onClick={this.toggleBottomPanel}
          >
            <img src={arrow} alt="arrow" />
          </button>
          <BottomPanel />
        </div>
      </div>
    );
  }
}

BackgroundSlider.propTypes = {
  children: PropTypes.any,
};

export default BackgroundSlider;
