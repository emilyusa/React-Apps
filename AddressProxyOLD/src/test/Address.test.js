import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import addresses from '../address-list';
import {configure,shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

configure({adapter:new Adapter()});

const address = addresses[0];

describe('Address tests',  function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider>
                <BrowserRouter>
                    <Address/>
                </BrowserRouter>
            </MuiThemeProvider>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });



});

