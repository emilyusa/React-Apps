import React from 'react';
import {configure, shallow} from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
import {createMuiTheme} from "@material-ui/core/styles/index";
import AddressEditFields from '../components/AddressEditFields';
import dataManager from "../assets/FakeDataManager";


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


    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    // it('renders without crashing', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(
    //         <MuiThemeProvider theme={themeDark}>
    //             <AddressEditFields/>
    //         </MuiThemeProvider>,
    //         div
    //     );
    //     ReactDOM.unmountComponentAtNode(div);
    // });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<AddressEditFields
                                    addressList={addresses[0]}
                                />);
        expect(wrapper.prop('addressList').firstName).toBe("unknown");
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<AddressEditFields
            addressList={addresses[0]}
        />);
        expect(wrapper.prop('addressList').lastName).toBe("unknown");
    });

    const afterClickFieldTest = (wrapper, finder) => {
        setImmediate(() => {
            wrapper.update();
            wrapper.instance().setState('Chunyan');
            setImmediate(() => {
                wrapper.update();
            });
        });
    };

    let  wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<AddressEditFields
            dataManager={dataManager}
            addressList={addresses[1]} />);
    });

    it('renders and displays the default first name after edit', () => {
        const wrapper = shallow(<AddressEditFields
                            addressChangedByUser={beforeEach}
                        />);
        expect(wrapper.prop('addressChangedByUser').length).toBe(0);
    });

});