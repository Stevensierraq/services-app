import React, { Component } from 'react';
import LoginForm from '../components/forms/login-form';
import '../App.css';

class Login extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <LoginForm onSubmit={this.submit} />
          </header>
        </div>
    );
  }
}

export default Login;