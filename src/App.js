import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import Login from './pages/login'
import Dashboard from './pages/dashboard'

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Dashboard />
      </MuiThemeProvider>
    );
  }
}

export default App;
