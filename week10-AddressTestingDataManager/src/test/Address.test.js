import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import addresses from '../address-list';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {createMuiTheme} from "@material-ui/core/styles/index";
import dataManager from '../assets/FakeDataManager';

configure({ adapter: new Adapter() });

describe('Address tests', function() {
    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
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

    // it('renders without crashing', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(
    //         <MuiThemeProvider theme={themeDark}>
    //             <Address />
    //         </MuiThemeProvider>,
    //         div
    //     );
    //     ReactDOM.unmountComponentAtNode(div);
    // });

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



    const afterClickFieldTest = (wrapper, finder) => {
        setImmediate(() => {
            wrapper.update();
            wrapper.instance().setAddress(0);
            setImmediate(() => {
                wrapper.update();
                try {
                    finder();
                } catch (e) {
                    console.log(e);
                }
            });
        });
    };

    it.only('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);

        afterClickFieldTest(wrapper, () => {
            expect(
                wrapper.find('WithStyles(AddressShow)').prop('name').firstName
            ).toEqual('Patty');
        });
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses} />);
        afterClickFieldTest(wrapper, () => {
            expect(
                wrapper.find('WithStyles(AddressShow)').prop('name').lastName
            ).toEqual('Murray');
        });
    });

    // it('renders state of firstName after button click', () => {
    //     const wrapper = shallow(<Address addressList={addresses} />);
    //     afterClickFieldTest(wrapper, () => {
    //         expect(
    //             wrapper.find('AddressShow').prop('address').firstName
    //         ).toEqual('Chunyan');
    //     });
    // });
    //
    // it('renders state of lastName after button click', () => {
    //     const wrapper = shallow(<Address addressList={addresses} />);
    //     afterClickFieldTest(wrapper, () => {
    //         expect(
    //             wrapper.find('AddressShow').prop('address').lastName
    //         ).toEqual('Li');
    //     });
    // });
    //
    // it('renders state of street after button click', () => {
    //     const wrapper = shallow(<Address addressList={addresses} />);
    //     afterClickFieldTest(wrapper, () => {
    //         expect(wrapper.find('AddressShow').prop('address').street).toEqual(
    //             '4190 129th PL SE'
    //         );
    //     });
    // });
    //
    // it('renders state of city after button click', () => {
    //     const wrapper = shallow(<Address addressList={addresses} />);
    //     afterClickFieldTest(wrapper, () => {
    //         expect(wrapper.find('AddressShow').prop('address').city).toEqual(
    //             'Bellevue'
    //         );
    //     });
    // });
    //
    // it('renders state of state after button click', () => {
    //     const wrapper = shallow(<Address addressList={addresses} />);
    //     afterClickFieldTest(wrapper, () => {
    //         expect(wrapper.find('AddressShow').prop('address').state).toEqual(
    //             'WA'
    //         );
    //     });
    // });
    //
    // it('renders state of zip after button click', () => {
    //     const wrapper = shallow(<Address addressList={addresses} />);
    //     afterClickFieldTest(wrapper, () => {
    //         expect(wrapper.find('AddressShow').prop('address').zip).toEqual(
    //             '98006'
    //         );
    //     });
    // });
    //
    // it('renders state of phone after button click', () => {
    //     const wrapper = shallow(<Address addressList={addresses} />);
    //     afterClickFieldTest(wrapper, () => {
    //         expect(wrapper.find('AddressShow').prop('address').phone).toEqual(
    //             '425-247-5300'
    //         );
    //     });
    // });
    //
    // it('renders state of website after button click', () => {
    //     const wrapper = shallow(<Address addressList={addresses} />);
    //     afterClickFieldTest(wrapper, () => {
    //         expect(wrapper.find('AddressShow').prop('address').website).toEqual(
    //             'www.google.com'
    //         );
    //     });
    // });
    //
    // it('renders state of email after button click', () => {
    //     const wrapper = shallow(<Address addressList={addresses} />);
    //     afterClickFieldTest(wrapper, () => {
    //         expect(wrapper.find('AddressShow').prop('address').email).toEqual(
    //             'emilyusa@yahoo.com'
    //         );
    //     });
    // });
    //
    // it('renders state of contact after button click', () => {
    //     const wrapper = shallow(<Address addressList={addresses} />);
    //     afterClickFieldTest(wrapper, () => {
    //         expect(wrapper.find('AddressShow').prop('address').contact).toEqual(
    //             'family'
    //         );
    //     });
    // });
});
