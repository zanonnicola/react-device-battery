import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Battery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battery: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  isBatteryStatusAPISupported() {
    if (navigator.getBattery || navigator.battery || navigator.mozBattery) {
      return true;
    }
    return false;
  }
  setBatteryState() {
    navigator.getBattery().then( battery => {
      const percentage = this.getBatteryLevel(battery);
      this.props.onChange(percentage);
      this.setState({ battery: percentage });
    });
  }
  getBatteryLevel(battery) {
    return parseFloat((battery.level * 100).toFixed(2));
  }
  handleChange() {
    this.setBatteryState();
  }
  componentDidMount() {
    if (this.isBatteryStatusAPISupported()) {
      this.setBatteryState();
      this.props.onChange(this.state.battery);
      navigator.getBattery().then(battery => {
        battery.addEventListener("levelchange", this.handleChange); 
      });
    }
  }
  componentWillUnmount() {
    navigator.getBattery().then(battery => {
      battery.removeEventListener("levelchange", this.handleChange);
    });
  }
  render() {
    return this.props.render(this.state);
  }
}
if (process.env.NODE_ENV !== "production") {
  Battery.defaultProps = {
    render: () => null,
    onChange: () => { }
  };
  Battery.propTypes = {
    render: PropTypes.func.isRequired,
    onChange: PropTypes.func
  };
}

export default Battery;