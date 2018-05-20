import React from 'react';
import Address from '../components/Address';
import AddressShow from '../components/AddressShow';
import addresses from '../address-list';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const address = addresses[0];

describe('AddressShow Shallow Suite', function() {
    const addressTest = {
        firstName: 'Chunyan',
        lastName: 'Li',
        Street: '4190 129th PL SE',
        City: 'Bellevue',
        State: 'WA',
        Postal: '98006'
    };

    const defaultFieldTest = name => {
        const wrapper = mount(<AddressShow address={address} />);
        const welcome = <p className="App-intro">{name}</p>;

        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = name => {
        const wrapper = mount(<Address address={address} />);
        const patty = <p className="App-intro">{name}</p>;

        wrapper.find('#setAddress').simulate('click');

        expect(wrapper.contains(patty)).toEqual(true);
    };

    it('renders and displays the default first name', () => {
        defaultFieldTest('firstName:unknown');
        afterClickFieldTest('firstName:' + addressTest.firstName);
    });

    it('renders and displays the default last name', () => {
        defaultFieldTest('lastName:unknown');
        afterClickFieldTest('lastName:' + addressTest.lastName);
    });

    it('renders and displays the default street', () => {
        defaultFieldTest('Street:unknown');
        afterClickFieldTest('Street:' + addressTest.Street);
    });

    it('renders and displays the default city', () => {
        defaultFieldTest('City:unknown');
        afterClickFieldTest('City:' + addressTest.City);
    });

    it('renders and displays the default state', () => {
        defaultFieldTest('State:unknown');
        afterClickFieldTest('State:' + addressTest.State);
    });

    it('renders and displays the default postal', () => {
        defaultFieldTest('Postal:unknown');
        afterClickFieldTest('Postal:' + addressTest.Postal);
    });
});
