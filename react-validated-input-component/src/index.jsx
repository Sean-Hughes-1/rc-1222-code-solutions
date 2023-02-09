import React from 'react';
import * as ReactDOM from 'react-dom';

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      validationMessage: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    const { password } = this.state;
    if (!password) {
      this.setState({ validationMessage: 'A password is required' });
    } else if (password.length < 8) {
      this.setState({ validationMessage: 'Password must be at least 8 characters' });
    } else {
      this.setState({ validationMessage: '' });
    }
  }

  render() {
    const { password, validationMessage } = this.state;
    const x = <i className="fa-solid fa-xmark"></i>;
    const y = <i className="fa-solid fa-check"></i>;
    let passwordValidation;
    if (password) {
      if (password.length >= 8) {
        passwordValidation = y;
      } else {
        passwordValidation = x;
      }
    } else {
      passwordValidation = '';
    }
    return (
      <div>
        <input
          type="password"
          value={password}
          onChange={this.handlePasswordChange}
          onFocus={this.handlePasswordChange}
        />
        <span>{passwordValidation}</span>
        <div>{validationMessage}</div>
      </div>
    );
  }
}

const container = document.querySelector('#root');
ReactDOM.render(<PasswordInput />, container);
