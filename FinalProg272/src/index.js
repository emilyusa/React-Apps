import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const themePurple = createMuiTheme({
    palette: {
        primary: {
            light: purple[300],
            main: purple[500],
            dark: purple[700],
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700],
        },
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={themePurple}>
        <App/>
    </MuiThemeProvider>,

    document.getElementById('root')
);

registerServiceWorker();