import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Router>
            <App />
        </Router>
    </div>,
    document.getElementById('root'));

registerServiceWorker();


