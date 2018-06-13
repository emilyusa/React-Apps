import React from 'react';
import AddressShow from '../components/AddressShow';
import addresses from '../address-list';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dataManager from '../assets/FakeDataManager';

configure({ adapter: new Adapter() });

describe('AddressShow Shallow Suite', function() {
    const address = addresses[0];

    it('should take an AddressShow snapshot', () => {
        const elfTree = shallow(<AddressShow address={address}/>);
        expect(elfTree).toMatchSnapshot();
    });

    const addressProp = wrapper =>
        wrapper.find('WithStyles(AddressShow)').prop('address');

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper.prop('addressList').firstName).toEqual('unknown');
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper.prop('addressList').lastName).toEqual('unknown');
    });

    it('renders and displays the default street', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper.prop('addressList').street).toEqual('unknown');
    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper.prop('addressList').city).toEqual('unknown');
    });

    it('renders and displays the default state', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper.prop('addressList').state).toEqual('unknown');
    });

    it('renders and displays the default zip', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper.prop('addressList').zip).toEqual('unknown');
    });

    it('renders and displays the default phone', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper.prop('addressList').phone).toEqual('unknown');
    });

    it('renders and displays the default website', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper.prop('addressList').website).toEqual('unknown');
    });

    it('renders and displays the default email', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper.prop('addressList').email).toEqual('unknown');
    });

    it('renders and displays the default contact', () => {
        const wrapper = shallow(<AddressShow addressList={address} />);
        expect(wrapper.prop('addressList').contact).toEqual('unknown');
    });

    const afterClickFieldTest = wrapper => {
        setImmediate(() => {
            wrapper.update();
            wrapper.instance();
            setImmediate(() => {
                wrapper.update();
            });
        });
    };

    const setAddress=()=>{
        const address=addresses[1];
        this.setProps({address:address});
    };

    it('renders and displays the first name after click', () => {
        const wrapper = shallow(
            <AddressShow dataManager={dataManager} addressList={addresses} setAddress={setAddress}/>
        );
        afterClickFieldTest(wrapper, () => {
            expect(addressProp(wrapper).firstName).toEqual('Patty');
        });
    });

    it('renders and displays the last name after click', () => {
        const wrapper = shallow(
            <AddressShow dataManager={dataManager} addressList={addresses} setAddress={setAddress}/>
        );
        afterClickFieldTest(wrapper, () => {
            expect(addressProp(wrapper).lastName).toEqual('Murray');
        });
    });

    it('renders and displays the street after click', () => {
        const wrapper = shallow(
            <AddressShow dataManager={dataManager} addressList={addresses} setAddress={setAddress}/>
        );
        afterClickFieldTest(wrapper, () => {
            expect(addressProp(wrapper).street).toEqual(
                '154 Russell Senate Office Building'
            );
        });
    });

    it('renders and displays the city after click', () => {
        const wrapper = shallow(
            <AddressShow dataManager={dataManager} addressList={addresses} setAddress={setAddress}/>
        );
        afterClickFieldTest(wrapper, () => {
            expect(addressProp(wrapper).city).toEqual('Washington DC');
        });
    });

    it('renders and displays the state after click', () => {
        const wrapper = shallow(
            <AddressShow dataManager={dataManager} addressList={addresses} setAddress={setAddress}/>
        );
        afterClickFieldTest(wrapper, () => {
            expect(addressProp(wrapper).state).toEqual('WA');
        });
    });

    it('renders and displays the zip after click', () => {
        const wrapper = shallow(
            <AddressShow dataManager={dataManager} addressList={addresses} setAddress={setAddress}/>
        );
        afterClickFieldTest(wrapper, () => {
            expect(addressProp(wrapper).zip).toEqual(' 20510');
        });
    });

    it('renders and displays the phone after click', () => {
        const wrapper = shallow(
            <AddressShow dataManager={dataManager} addressList={addresses} setAddress={setAddress}/>
        );
        afterClickFieldTest(wrapper, () => {
            expect(addressProp(wrapper).phone).toEqual('202-224-2621');
        });
    });

    it('renders and displays the website after click', () => {
        const wrapper = shallow(
            <AddressShow dataManager={dataManager} addressList={addresses} setAddress={setAddress}/>
        );
        afterClickFieldTest(wrapper, () => {
            expect(addressProp(wrapper).website).toEqual(
                'https://www.murray.senate.gov/public'
            );
        });
    });

    it('renders and displays the email after click', () => {
        const wrapper = shallow(
            <AddressShow dataManager={dataManager} addressList={addresses} setAddress={setAddress}/>
        );
        afterClickFieldTest(wrapper, () => {
            expect(addressProp(wrapper).email).toEqual('');
        });
    });

    it('renders and displays the contact after click', () => {
        const wrapper = shallow(
            <AddressShow dataManager={dataManager} addressList={addresses} setAddress={setAddress}/>
        );
        afterClickFieldTest(wrapper, () => {
            expect(addressProp(wrapper).contact).toEqual(
                'http://www.murray.senate.gov/public/index.cfm/contactme'
            );
        });
    });
});
