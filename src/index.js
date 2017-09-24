import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Battery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battery: 100
    };
  } 
  isBatteryStatusAPISupported() {
    if (navigator.getBattery || navigator.battery || navigator.mozBattery) {
      return true;
    }
    return false;
  }
  render() {
    console.log('MyComponent');
    return this.props.render(this.state);
  }
}

Battery.defaultProps = {
  render: () => null,
  onChange: () => {}
};

export default Battery;