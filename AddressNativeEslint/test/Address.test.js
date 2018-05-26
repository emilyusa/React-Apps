import React from 'react';
import Address from '../Address';
import addresses from '../address-list';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({adapter:new Adapter()});


describe ('Address tests',function() {

    it('renders without crashing', () => {
        const tree = renderer.create(<Address />).toJSON();
        expect(tree).toMatchSnapshot();

    });

    beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => {
            const promise = new Promise(resolve => {
                resolve({
                    ok: true,
                    json: function () {
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
                                contact:'family'
                            }
                        ];
                    }
                });
            });
            return promise;
        });
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

    it('renders state of firstName before button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('unknown');
    });

    it('renders state of lastName before button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        expect(wrapper.find('AddressShow').prop('address').lastName).toEqual('unknown');
    });

    it('renders state of street before button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        expect(wrapper.find('AddressShow').prop('address').street).toEqual('unknown');
    });

    it('renders state of city before button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        expect(wrapper.find('AddressShow').prop('address').city).toEqual('unknown');
    });

    it('renders state of state before button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        expect(wrapper.find('AddressShow').prop('address').state).toEqual('unknown');
    });

    it('renders state of zip before button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        expect(wrapper.find('AddressShow').prop('address').zip).toEqual('unknown');
    });

    it('renders state of phone before button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        expect(wrapper.find('AddressShow').prop('address').phone).toEqual('unknown');
    });

    it('renders state of website before button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        expect(wrapper.find('AddressShow').prop('address').website).toEqual('unknown');
    });

    it('renders state of email before button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        expect(wrapper.find('AddressShow').prop('address').email).toEqual('unknown');
    });

    it('renders state of contact before button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        expect(wrapper.find('AddressShow').prop('address').contact).toEqual('unknown');
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('Chunyan');
        });
    });

    it('renders state of lastName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').lastName).toEqual('Li');
        });
    });

    it('renders state of street after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').street).toEqual('4190 129th PL SE');
        });
    });

    it('renders state of city after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').city).toEqual('Bellevue');
        });
    });

    it('renders state of state after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').state).toEqual('WA');
        });
    });

    it('renders state of zip after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').zip).toEqual('98006');
        });
    });

    it('renders state of phone after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').phone).toEqual('425-247-5300');
        });
    });

    it('renders state of website after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').website).toEqual('www.google.com');
        });
    });

    it('renders state of email after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').email).toEqual('emilyusa@yahoo.com');
        });
    });

    it('renders state of contact after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').contact).toEqual('family');
        });
    });
});