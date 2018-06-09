import React from 'react';
import ReactDOM from 'react-dom';
import AddressShow from '../components/AddressShow';
import addresses from '../address-list';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dataManager from "../assets/FakeDataManager";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

    const addressProp = wrapper => wrapper
        .find('WithStyles(AddressShow)')
        .prop('address');


    const afterClickFieldTest = name => {
        wrapper = shallow(
            <AddressShow address={address} setAddress={setAddress} />
        );
        const patty = <p className="App-intro">{name}</p>;
        wrapper.dive().find('#setAddress').simulate('click');
        expect(wrapper.dive().contains(patty)).toBe(true);
    };

    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });


    it('renders and displays the default first name', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper
            .prop('addressList')
            .firstName)
            .toEqual('unknown');
    });



    it('renders and displays the default last name', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper
            .prop('addressList')
            .lastName)
            .toEqual('unknown');
    });

    it('renders and displays the default street', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper
            .prop('addressList')
            .street)
            .toEqual('unknown');
    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper
            .prop('addressList')
            .city)
            .toEqual('unknown');
    });

    it('renders and displays the default state', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper
            .prop('addressList')
            .state)
            .toEqual('unknown');
    });

    it('renders and displays the default zip', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper
            .prop('addressList')
            .zip)
            .toEqual('unknown');
    });

    it('renders and displays the default phone', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper
            .prop('addressList')
            .phone)
            .toEqual('unknown');
    });

    it('renders and displays the default website', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper
            .prop('addressList')
            .website)
            .toEqual('unknown');
    });

    it('renders and displays the default email', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper
            .prop('addressList')
            .email)
            .toEqual('unknown');
    });

    it('renders and displays the default contact', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper
            .prop('addressList')
            .contact)
            .toEqual('unknown');
    });
});
