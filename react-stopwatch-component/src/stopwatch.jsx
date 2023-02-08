import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      count: 0
    };
    this.intervalId = null;
    this.classModifier = 'fa-solid fa-play';
    this.handleClick = this.handleClick.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    this.toggleButton();
    if (this.state.start === false) {
      this.stateToggle();
      this.intervalId = setInterval(() => {
        this.timer();
      }, 1000);
    } else {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.stateToggle();
    }
  }

  toggleButton() {
    if (this.state.start) {
      this.classModifier = 'fa-solid fa-play';
    } else {
      this.classModifier = 'fa-solid fa-pause';
    }
    return this.classModifier;
  }

  stateToggle() {
    this.setState(prev => ({
      start: !prev.start
    }));
  }

  timer() {
    this.setState({ count: this.state.count + 1 });
  }

  resetTimer() {
    if (this.state.start === false) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className='watch-container' onClick={this.resetTimer}>
        <div className='stop-watch'>{this.state.count}</div>
        <i className={this.classModifier} onClick={this.handleClick}></i>
      </div>
    );
  }
}
