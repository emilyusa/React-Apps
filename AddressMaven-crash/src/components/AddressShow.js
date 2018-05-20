import React, { Component } from 'react';
import '../css/App.css';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './elf-styles';
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

class AddressShow extends Component {
    static propTypes = {
        address: PropTypes.string,
        setAddress: PropTypes.string
    };

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
                    id="setAddress"
                    label="Set Address"
                    labelPosition="before"
                    primary={true}
                    icon={
                        <FontIcon class="material-icons" color={red500}>
                            rss_feed
                        </FontIcon>
                    }
                    style={styles.button}
                    onClick={this.props.setAddress}
                />
            </div>
        );
    }
}

export default AddressShow;
