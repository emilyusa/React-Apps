import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import addresses from '../address-list';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

configure({ adapter: new Adapter() });

describe('Address tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider>
                <Address />
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => {
            const promise = new Promise(resolve => {
                resolve({
                    ok: true,
                    json: function() {
                        return [
                            {
                                firstName: 'Chunyan',
                                lastName: 'Li',
                                address: '4190 129th PL SE',
                                city: 'Bellevue',
                                state: 'WA',
                                zip: '98006',
                                phone: '425-247-5300',
                                website: 'www.google.com',
                                email: 'emilyusa@yahoo.com',
                                contact: 'family'
                            }
                        ];
                    }
                });
            });
            return promise;
        });
    });


    const beforeClickFieldTest=(wrapper)=>{
        setImmediate(() => {
            wrapper.update();
            wrapper.instance().setAddress(0);
        });
    };

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

    it('renders state of firstName before and after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        beforeClickFieldTest(wrapper,()=>{
            expect(
                wrapper.find('AddressShow').prop('address').firstName
            ).toEqual('unknown');
        });
        afterClickFieldTest(wrapper, () => {
            expect(
                wrapper.find('AddressShow').prop('address').firstName
            ).toEqual('Chunyan');
        });
    });

    it('renders state of lastName before and after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        beforeClickFieldTest(wrapper,()=>{
            expect(
                wrapper.find('AddressShow').prop('address').lastName
            ).toEqual('unknown');
        });
        afterClickFieldTest(wrapper, () => {
            expect(
                wrapper.find('AddressShow').prop('address').lastName
            ).toEqual('Li');
        });
    });

    it('renders state of street before and after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        beforeClickFieldTest(wrapper,()=>{
            expect(
                wrapper.find('AddressShow').prop('address').street
            ).toEqual('unknown');
        });
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').street).toEqual(
                '4190 129th PL SE'
            );
        });
    });

    it('renders state of city before and after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        beforeClickFieldTest(wrapper,()=>{
            expect(
                wrapper.find('AddressShow').prop('address').city
            ).toEqual('unknown');
        });
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').city).toEqual(
                'Bellevue'
            );
        });
    });

    it('renders state of state before and after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        beforeClickFieldTest(wrapper,()=>{
            expect(
                wrapper.find('AddressShow').prop('address').state
            ).toEqual('unknown');
        });
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').state).toEqual(
                'WA'
            );
        });
    });

    it('renders state of zip before and after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        beforeClickFieldTest(wrapper,()=>{
            expect(
                wrapper.find('AddressShow').prop('address').zip
            ).toEqual('unknown');
        });
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').zip).toEqual(
                '98006'
            );
        });
    });

    it('renders state of phone before and after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        beforeClickFieldTest(wrapper,()=>{
            expect(
                wrapper.find('AddressShow').prop('address').phone
            ).toEqual('unknown');
        });
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').phone).toEqual(
                '425-247-5300'
            );
        });
    });

    it('renders state of website before and after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        beforeClickFieldTest(wrapper,()=>{
            expect(
                wrapper.find('AddressShow').prop('address').website
            ).toEqual('unknown');
        });
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').website).toEqual(
                'www.google.com'
            );
        });
    });

    it('renders state of email before and after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        beforeClickFieldTest(wrapper,()=>{
            expect(
                wrapper.find('AddressShow').prop('address').email
            ).toEqual('unknown');
        });
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').email).toEqual(
                'emilyusa@yahoo.com'
            );
        });
    });

    it('renders state of contact before and after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        beforeClickFieldTest(wrapper,()=>{
            expect(
                wrapper.find('AddressShow').prop('address').contact
            ).toEqual('unknown');
        });
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').contact).toEqual(
                'family'
            );
        });
    });
});
