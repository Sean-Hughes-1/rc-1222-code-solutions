import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
    this.handleClick = this.handleClick.bind(this);
  }

  toggle() {
    if (this.state.on === false) {
      this.setState({ on: true });
    } else {
      this.setState({ on: false });
    }
  }

  handleClick() {
    this.toggle();
    this.getClassName();
  }

  getClassName() {
    let className = '';
    switch (this.state.on) {
      case true:
        className = 'toggle-container on';
        break;
      case false:
        className = 'toggle-container off';
        break;
    }
    return className;
  }

  render() {
    return (<div id='toggle-container' className={this.getClassName()} onClick={this.handleClick}>
      <div className = 'circle'/>
    </div>);
  }
}
