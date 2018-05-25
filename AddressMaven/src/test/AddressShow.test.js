import React from 'react';
import ReactDOM from 'react-dom';
import AddressShow from '../components/AddressShow';
import addresses from '../address-list';
import {configure,shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter:new Adapter()});


describe('AddressShow Shallow Suite', function () {

    const address = addresses[0];

    const addressTest = {
        firstName: 'Chunyan',
        lastName: 'Li',
        Street: '4190 129th PL SE',
        City: 'Bellevue',
        State: 'WA',
        Postal: '98006'
    };

    let wrapper = null;

    const setAddress = () => {
        const address=addresses[1];
        wrapper.setProps({ address: address });
    };

    const defaultFieldTest = (name) => {
        const wrapper = shallow((<AddressShow address={address}/>));
        const welcome = <p className="App-intro">{name}</p>;

        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = (name) => {
        wrapper = shallow(<AddressShow address={address} setAddress={setAddress}/>);
        const patty = <p className="App-intro">{name}</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(patty)).toBe(true);
    };

    it('renders and displays the first name', () => {
        defaultFieldTest('firstName:unknown');
        afterClickFieldTest('firstName:' + addressTest.firstName);
    });



    it('renders and displays the default last name', () => {
        defaultFieldTest('lastName:unknown');
        afterClickFieldTest('lastName:'+addressTest.lastName);
    });

    it('renders and displays the default street', () => {
        defaultFieldTest('Street:unknown');
        afterClickFieldTest('Street:'+addressTest.Street);
    });

    it('renders and displays the default city', () => {
        defaultFieldTest('City:unknown');
        afterClickFieldTest('City:'+addressTest.City);
    });

    it('renders and displays the default state', () => {
        defaultFieldTest('State:unknown');
        afterClickFieldTest('State:'+addressTest.State);
    });

    it('renders and displays the default postal', () => {
        defaultFieldTest('Postal:unknown');
        afterClickFieldTest('Postal:'+addressTest.Postal);
    });


});

