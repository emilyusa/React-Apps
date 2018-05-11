import React, { Component } from 'react';
import '../css/App.css';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import styles from './elf-styles';
import PropTypes from 'prop-types';

class AddressShow extends Component {
    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    firstName:{this.props.address.firstName}
                </p>
                <p className="App-intro">
                    lastName:{this.props.address.lastName}
                </p>
                <p className="App-intro">Street:{this.props.address.street}</p>
                <p className="App-intro">City:{this.props.address.city}</p>
                <p className="App-intro">
                    State:{this.props.address.somestate}
                </p>
                <p className="App-intro">Postal:{this.props.address.postal}</p>
                <RaisedButton
                    label="Set Address"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionAndroid />}
                    style={styles.button}
                    onClick={this.props.setAddress}
                />
            </div>
        );
    }
}

AddressShow.propTypes = {
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        street: PropTypes.string,
        city: PropTypes.string,
        somestate: PropTypes.string,
        postal: PropTypes.string
    }),
    setAddress: PropTypes.func
};

export default AddressShow;
