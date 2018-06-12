import React from 'react';
import { configure, shallow } from 'enzyme/build/index';
import Adapter from 'enzyme-adapter-react-16/build/index';
import AddressEditFields from '../components/AddressEditFields';

configure({ adapter: new Adapter() });

describe('AddressEditFields test', function() {
    const addresses = [
        {
            firstName: 'unknown',
            lastName: 'unknown'
        },
        {
            firstName: 'Chunyan',
            lastName: 'Li'
        }
    ];

    it('renders and displays the default first name', () => {
        const wrapper = shallow(
            <AddressEditFields addressList={addresses[0]} />
        );
        expect(wrapper.prop('addressList').firstName).toBe('unknown');
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(
            <AddressEditFields addressList={addresses[0]} />
        );
        expect(wrapper.prop('addressList').lastName).toBe('unknown');
    });

    it('renders and displays the default first name after edit', () => {
        const wrapper = shallow(
            <AddressEditFields addressChangedByUser={beforeEach} />
        );
        expect(wrapper.prop('addressChangedByUser').length).toBe(0);
    });
});
