import React from 'react';

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIndex: -1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    if (this.state.openIndex === index) {
      this.setState({
        openIndex: -1
      });
    } else {
      this.setState({
        openIndex: index
      });
    }
  }

  render() {
    return (
      <>
        <button className="accordion" onClick={() => this.handleClick(0)}>Section 1</button>
        <div className={this.state.openIndex === 0 ? 'panel open' : 'panel'}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <button className="accordion" onClick={() => this.handleClick(1)}>Section 2</button>
        <div className={this.state.openIndex === 1 ? 'panel open' : 'panel'}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <button className="accordion" onClick={() => this.handleClick(2)}>Section 3</button>
        <div className={this.state.openIndex === 2 ? 'panel open' : 'panel'}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </>
    );
  }
}
