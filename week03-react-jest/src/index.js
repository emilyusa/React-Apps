import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



const myProps = {
    testProp: 2,
    myProp:3
};

ReactDOM.render(
    <App myProps={myProps} />,
    document.getElementById('root')
);

registerServiceWorker();