import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import AddressShow from './components/Address';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />
        <AddressShow />
    </div>,
    document.getElementById('root'));
registerServiceWorker();
