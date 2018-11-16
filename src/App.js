import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import theme from './theme';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

const AuthRoute = ({isAuth}) => (
  <Route path="/dashboard" render={() => (
    isAuth === true
      ? <Dashboard />
      : <Redirect to="/" />
  )} />
);

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Login} />
              <AuthRoute isAuth={this.props.isAuth}/>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.authenticate
  };
};

export default connect(mapStateToProps)(App);
