import React from 'react';
import AddressShow from '../components/AddressShow';
import addresses from '../address-list';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AddressShow Shallow Suite', function() {
    const address = addresses[0];

    const addressTest = {
        firstName: 'Chunyan',
        lastName: 'Li',
        street: '4190 129th PL SE',
        city: 'Bellevue',
        state: 'WA',
        zip: '98006',
        phone: '425-247-5300',
        website: 'www.google.com',
        email: 'emilyusa@yahoo.com',
        contact: 'family'
    };

    let wrapper = null;

    const setAddress = () => {
        const address = addresses[1];
        wrapper.setProps({ address: address });
    };

    const defaultFieldTest = name => {
        const wrapper = shallow(<AddressShow address={address} />);
        const welcome = <p className="App-intro">{name}</p>;

        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = name => {
        wrapper = shallow(
            <AddressShow address={address} setAddress={setAddress} />
        );
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
        afterClickFieldTest('lastName:' + addressTest.lastName);
    });

    it('renders and displays the default street', () => {
        defaultFieldTest('Street:unknown');
        afterClickFieldTest('Street:' + addressTest.street);
    });

    it('renders and displays the default city', () => {
        defaultFieldTest('City:unknown');
        afterClickFieldTest('City:' + addressTest.city);
    });

    it('renders and displays the default state', () => {
        defaultFieldTest('State:unknown');
        afterClickFieldTest('State:' + addressTest.state);
    });

    it('renders and displays the default zip', () => {
        defaultFieldTest('Zip:unknown');
        afterClickFieldTest('Zip:' + addressTest.zip);
    });

    it('renders and displays the default phone', () => {
        defaultFieldTest('Phone:unknown');
        afterClickFieldTest('Phone:' + addressTest.phone);
    });

    it('renders and displays the default website', () => {
        defaultFieldTest('Website:unknown');
        afterClickFieldTest('Website:' + addressTest.website);
    });

    it('renders and displays the default email', () => {
        defaultFieldTest('Email:unknown');
        afterClickFieldTest('Email:' + addressTest.email);
    });

    it('renders and displays the default contact', () => {
        defaultFieldTest('Contact:unknown');
        afterClickFieldTest('Contact:' + addressTest.contact);
    });
});
