import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import addresses from '../address-list';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dataManager from '../assets/FakeDataManager';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

configure({ adapter: new Adapter() });

describe('Address tests', function() {
    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <Address
                    dataManager={dataManager}
                    addressList={addresses} />
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    let  wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
    });

    const addressProp = wrapper => wrapper
        .find('WithStyles(AddressShow)')
        .prop('address');


    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        expect(wrapper
            .find('WithStyles(AddressShow)')
            .prop('name')
            .firstName)
            .toEqual('unknown');
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        expect(wrapper
            .find('WithStyles(AddressShow)')
            .prop('name')
            .lastName)
            .toEqual('unknown');
    });

    it('renders and displays the default street', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        expect(wrapper
            .find('WithStyles(AddressShow)')
            .prop('name')
            .street)
            .toEqual('unknown');
    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        expect(wrapper
            .find('WithStyles(AddressShow)')
            .prop('name')
            .city)
            .toEqual('unknown');
    });

    it('renders and displays the default state', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        expect(wrapper
            .find('WithStyles(AddressShow)')
            .prop('name')
            .state)
            .toEqual('unknown');
    });

    it('renders and displays the default zip', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        expect(wrapper
            .find('WithStyles(AddressShow)')
            .prop('name')
            .zip)
            .toEqual('unknown');
    });

    it('renders and displays the default phone', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        expect(wrapper
            .find('WithStyles(AddressShow)')
            .prop('name')
            .phone)
            .toEqual('unknown');
    });

    it('renders and displays the default website', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        expect(wrapper
            .find('WithStyles(AddressShow)')
            .prop('name')
            .website)
            .toEqual('unknown');
    });

    it('renders and displays the default email', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        expect(wrapper
            .find('WithStyles(AddressShow)')
            .prop('name')
            .email)
            .toEqual('unknown');
    });

    it('renders and displays the default contact', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        expect(wrapper
            .find('WithStyles(AddressShow)')
            .prop('name')
            .contact)
            .toEqual('unknown');
    });


    const afterClickFieldTest = (wrapper, finder) => {
        setImmediate(() => {
            wrapper.update();
            wrapper.instance().setAddress(0);
            setImmediate(() => {
                wrapper.update();
            });
        });
    };

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(
                addressProp(wrapper).firstName
            ).toEqual('Patty');
        });
    });

    it('renders state of lastName after button click', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(
                addressProp(wrapper).lastName
            ).toEqual('Murray');
        });
    });

    it('renders state of street after button click', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(
                addressProp(wrapper).firstName
            ).toEqual('154 Russell Senate Office Building');
        });
    });

    it('renders state of city after button click', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(
                addressProp(wrapper).firstName
            ).toEqual('Washington DC');
        });
    });

    it('renders state of state after button click', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(
                addressProp(wrapper).firstName
            ).toEqual('WA');
        });
    });

    it('renders state of zip after button click', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(
                addressProp(wrapper).firstName
            ).toEqual(' 20510');
        });
    });

    it('renders state of phone after button click', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(
                addressProp(wrapper).firstName
            ).toEqual('202-224-2621');
        });
    });

    it('renders state of website after button click', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(
                addressProp(wrapper).firstName
            ).toEqual('https://www.murray.senate.gov/public');
        });
    });

    it('renders state of email after button click', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(
                addressProp(wrapper).firstName
            ).toEqual('');
        });
    });

    it('renders state of contact after button click', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(
                addressProp(wrapper).firstName
            ).toEqual('http://www.murray.senate.gov/public/index.cfm/contactme');
        });
    });
});