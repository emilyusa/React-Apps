import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {configure, shallow} from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
import {createMuiTheme} from "@material-ui/core/styles/index";
import AddressEdit from "../components/AddressEdit";
import addressList from "../address-list";

configure({ adapter: new Adapter() });

describe('AddressEdit test', function() {
    const address=addressList[0];

    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <AddressEdit open={true} address={address}/>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders title and tests with containsMatchingElement DialogTitle Edit Address', () => {
        const wrapper = shallow(< AddressEdit />);
        const target = <DialogTitle id="form-dialog-title">
                        Edit Address
                    </DialogTitle>
        expect(wrapper.find('WithStyles(DialogTitle)').containsMatchingElement(target)).toBe(true);
    });

    it('renders title and tests with containsMatchingElement DialogContentText', () => {
        const wrapper = shallow(< AddressEdit />);
        const target = <DialogContentText>
                        Fill in the fields of the address record.
                    </DialogContentText>
        expect(wrapper.find('WithStyles(DialogContentText)').containsMatchingElement(target)).toBe(true);
    });


    it('renders title and tests with containsMatchingElement AddressEditFields', () => {
        const wrapper = shallow(< AddressEdit address={address}/>);
        expect(wrapper
            .find('WithStyles(AddressEditFields)')
            .prop('address')
            .firstName)
            .toEqual('unknown');
    });


    it('renders title and tests with containsMatchingElement cancel button', () => {
        const wrapper = shallow(<AddressEdit open={false}/>);
        expect(wrapper
                .find('WithStyles(Dialog)')
                .prop('open'))
                .toEqual(false);

    });


    it('renders title and tests with containsMatchingElement ok button', () => {
        const wrapper = shallow(< AddressEdit />);
        const target = <Button onClick={this.userClosedDialogNormal} color="primary">
                        Ok
                    </Button>
        expect(wrapper.find('WithStyles(DialogActions)').containsMatchingElement(target)).toBe(true);
    });


});