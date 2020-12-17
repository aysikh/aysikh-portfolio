import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import App from './App';

const theme = createMuiTheme({
    typography: {
      h3: {
        color: '#4ba3c7',
        textAlign: "center",
        fontFamily: "Roboto"
      },
    },
    palette: {
      primary: {
        main: '#f8bbd0',
      },
      secondary: {
        main: '#757575',
      },
    }
  })

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

