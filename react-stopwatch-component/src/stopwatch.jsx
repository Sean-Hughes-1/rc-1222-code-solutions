import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      count: 0
    };
    this.intervalId = null;
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
    const button = document.querySelector('.fa-solid');
    if (button.className === 'fa-solid fa-play') {
      button.className = 'fa-solid fa-pause';
    } else {
      button.className = 'fa-solid fa-play';
    }
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
        <i className='fa-solid fa-play' onClick={this.handleClick}></i>
      </div>
    );
  }
}
