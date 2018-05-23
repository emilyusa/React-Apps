import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import AddressShow from '../components/AddressShow';
import addresses from '../address-list';
import {configure,shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

configure({adapter:new Adapter()});

const address = addresses[0];

describe('AddressShow Shallow Suite', function () {

    const addressTest = {
        firstName: 'Chunyan',
        lastName: 'Li',
        Street: '4190 129th PL SE',
        City: 'Bellevue',
        State: 'WA',
        Zip: '98006',
        Phone:'425-247-5300',
        Website:'www.google.com',
        Email:'emilyusa@yahoo.com',
        Contact:'family'
    };


    const defaultFieldTest = (name) => {
        const wrapper = shallow((<AddressShow address={address}/>));
        const welcome = <p className="App-intro">{name}</p>;
        
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = (name) => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const patty = <p className="App-intro">{name}</p>;
        console.log(wrapper.debug());

        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(patty)).toEqual(patty);
    };


    it('renders and displays the default first name', () => {
        defaultFieldTest('firstName:unknown');
        //afterClickFieldTest('firstName:'+addressTest.firstName);
    });


    it('renders and displays the default last name', () => {
        defaultFieldTest('lastName:unknown');
        //afterClickFieldTest('lastName:'+addressTest.lastName);
    });

    it('renders and displays the default street', () => {
        defaultFieldTest('Street:unknown');
        //afterClickFieldTest('Street:'+addressTest.Street);
    });

    it('renders and displays the default city', () => {
        defaultFieldTest('City:unknown');
        //afterClickFieldTest('City:'+addressTest.City);
    });

    it('renders and displays the default state', () => {
        defaultFieldTest('State:unknown');
        //afterClickFieldTest('State:'+addressTest.State);
    });

    it('renders and displays the default postal', () => {
        defaultFieldTest('Zip:unknown');
        //afterClickFieldTest('Postal:'+addressTest.Postal);
    });

    it('renders and displays the default postal', () => {
        defaultFieldTest('Phone:unknown');
        //afterClickFieldTest('Postal:'+addressTest.Postal);
    });

    it('renders and displays the default postal', () => {
        defaultFieldTest('Website:unknown');
        //afterClickFieldTest('Postal:'+addressTest.Postal);
    });

    it('renders and displays the default postal', () => {
        defaultFieldTest('Email:unknown');
        //afterClickFieldTest('Postal:'+addressTest.Postal);
    });

    it('renders and displays the default postal', () => {
        defaultFieldTest('Contact:unknown');
        //afterClickFieldTest('Postal:'+addressTest.Postal);
    });
});

