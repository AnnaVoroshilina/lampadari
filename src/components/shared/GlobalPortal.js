import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

class GlobalPortal extends Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }

  componentDidMount() {
    const { className } = this.props;
    document.body.appendChild(this.element);
    document.body.addEventListener('click', this.closePopup);
    this.element.className = `global-modal ${className ? className : ''}`;
    this.setWrapperRef(this.element);
  }

  componentWillUnmount() {
    document.body.removeChild(this.element);
    document.body.removeEventListener('click', this.closePopup);
  }

  setWrapperRef = (node) => {
    this.wrapper = node;
  };

  closePopup = (event) => {
    const { close } = this.props;
    if (!close) return;
    if (this.wrapper && !this.wrapper.contains(event.target) && !event.keyCode) {
      close();
    }
    if (this.wrapper && event.keyCode === 27) {
      close();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(children, this.element);
  }
}

GlobalPortal.propTypes = {
  children: PropTypes.element.isRequired,
  close: PropTypes.func,
  className: PropTypes.string,
};

export default GlobalPortal;
