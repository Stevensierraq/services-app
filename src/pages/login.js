import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actionCreators';
import LoginForm from '../components/forms/login-form';
import '../App.css';

class Login extends Component {
  submit = (user) => {
    const {login, history} = this.props
    if(user.userName === "liftit" && user.password === "contratame"){
        login(user);
        history.push('/dashboard');
    }else{
        alert('Incorrect user or password')
    }
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

const mapStateToProps = state => {
    return {
      isAuth: state.authenticate
    };
};
  
const mapDispatchProps = dispatch => {
    return {
      login(user) {
        dispatch(login(user));
      }
    };
};

export default connect(mapStateToProps, mapDispatchProps)(Login);