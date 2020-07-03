import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import App from './App';
import Provider from './store/Provider';
import Todo from './components/Todo';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider>{location.hash === '#todo' ? <Todo /> : <App />}</Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

