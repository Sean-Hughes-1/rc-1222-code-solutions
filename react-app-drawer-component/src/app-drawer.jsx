import React from 'react';

export class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.open) {
      this.setState({
        open: true
      });
    } else {
      this.setState({
        open: false
      });
    }

  }

  render() {
    const sidebar = this.state.open ? 'sidebar-menu' : 'hidden';
    const background = this.state.open ? 'background grey' : 'background';
    return (
      <div className="container">
        <div className="column">
          <div className="burger-container" onClick={this.handleClick}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className={sidebar}>
            <h1>Menu</h1>
            <ul>
              <li onClick={this.handleClick}>About</li>
              <li onClick={this.handleClick}>Get Started</li>
              <li onClick={this.handleClick}>Sign In</li>
            </ul>
          </div>
        </div>

        <div className={background}></div>
      </div>
    );
  }

}
