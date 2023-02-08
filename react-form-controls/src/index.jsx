import React from 'react';
import ReactDOM from 'react-dom';

export class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pass: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('state: ', this.state);
  }

  handleUserNameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ pass: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='uname'>User name: </label><br />
        <input type='text' id='uname' name='uname' onChange={this.handleUserNameChange} value={this.state.username} /><br />
        <label htmlFor='pass'>Password: </label><br />
        <input type='text' id='pass' name='pass' onChange={this.handlePasswordChange}/><br /><br />
        <button type='submit' onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

const container = document.querySelector('#root');
ReactDOM.render(<RegistrationForm />, container);
