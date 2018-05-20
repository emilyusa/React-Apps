import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import AddressShow from '../components/AddressShow';
import addresses from '../address-list';
import {configure,shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

const address = addresses[0];

describe('AddressShow Shallow Suite', function () {

    var quiet = true;

    const debug = false;

    const addressTest = {
        firstName: 'Chunyan',
        lastName: 'Li',
        Street: '4190 129th PL SE',
        City: 'Bellevue',
        State: 'WA',
        Postal: '98006'
    };

    const getIndex = function(wrapper, index,talkToMe) {
        if (!quiet || talkToMe) {
            const container= wrapper.find('div');
            const ninep = container.childAt(index).debug();

        }
    };

    const defaultFieldTest = (name, index,talkToMe) => {
        const wrapper = mount((<AddressShow address={address}/>));
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index,talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper =mount(<Address address={address}/>);
        const patty = <p className="App-intro">{name}</p>;
		console.log(wrapper.debug());
        wrapper.find('#setAddress').simulate('click');
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(patty)).toEqual(true);
    };
    
    

    it('renders and displays the default first name', () => {
        defaultFieldTest('firstName:unknown', 0);
        afterClickFieldTest('firstName:'+addressTest.firstName, 0);
    });


    it('renders and displays the default last name', () => {
        defaultFieldTest('lastName:unknown', 1);
        afterClickFieldTest('lastName:'+addressTest.lastName, 1);
    });

    it('renders and displays the default street', () => {
        defaultFieldTest('Street:unknown', 2);
        afterClickFieldTest('Street:'+addressTest.Street, 2);
    });

    it('renders and displays the default city', () => {
        defaultFieldTest('City:unknown', 3);
        afterClickFieldTest('City:'+addressTest.City, 3);
    });

    it('renders and displays the default state', () => {
        defaultFieldTest('State:unknown', 4);
        afterClickFieldTest('State:'+addressTest.State, 4);
    });

    it('renders and displays the default postal', () => {
        defaultFieldTest('Postal:unknown', 5);
        afterClickFieldTest('Postal:'+addressTest.Postal, 5);
    });


});

