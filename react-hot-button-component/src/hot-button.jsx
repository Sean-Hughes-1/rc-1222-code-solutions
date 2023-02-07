import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prev => ({ count: prev.count + 1 }));
  }

  render() {
    return <button className = {
      this.state.count <= 3
        ? 'hot-button'
        : this.state.count < 4
          ? 'hot-button cold'
          : this.state.count < 7
            ? 'hot-button cool'
            : this.state.count < 10
              ? 'hot-button tepid'
              : this.state.count < 13
                ? 'hot-button warm'
                : this.state.count < 16
                  ? 'hot-button hot'
                  : this.state.count >= 16
                    ? 'hot-button nuclear'
                    : 'hot-button'
    } onClick={this.handleClick}>Hot Button</button>;
  }
}
