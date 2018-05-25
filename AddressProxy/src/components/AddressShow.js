import React, { Component } from 'react';
import '../css/App.css';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './elf-styles';
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

class AddressShow extends Component {

    render() {
        return (
            <div className="App">
                <p className="App-intro">firstName:{this.props.address.firstName}</p>
                <p className="App-intro">lastName:{this.props.address.lastName}</p>
                <p className="App-intro">Street:{this.props.address.street}</p>
                <p className="App-intro">City:{this.props.address.city}</p>
                <p className="App-intro">State:{this.props.address.state}</p>
                <p className="App-intro">Zip:{this.props.address.zip}</p>
                <p className="App-intro">Phone:{this.props.address.phone}</p>
                <p className="App-intro">Website:{this.props.address.website}</p>
                <p className="App-intro">Email:{this.props.address.email}</p>
                <p className="App-intro">Contact:{this.props.address.contact}</p>
                <RaisedButton
                    id="setAddressLast"
                    style={styles.button}
                    primary={true}
                    icon={
                        <FontIcon class="material-icons" color={red500}>
                            arrow_back_ios
                        </FontIcon>
                    }
                    onClick={(event) => this.props.setAddress(-1,event)}>

                </RaisedButton>
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
                    onClick={(event)=>this.props.setAddress(0,event)}>
                </RaisedButton>
                <RaisedButton
                    id="setAddressNext"
                    style={styles.button}
                    primary={true}
                    icon={
                        <FontIcon class="material-icons" color={red500}>
                            arrow_forward_ios
                        </FontIcon>
                    }
                    onClick={(event) => this.props.setAddress(1,event)}>

                </RaisedButton>
            </div>
        );
    }
}

AddressShow.propTypes = {
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        street:PropTypes.string,
        city:PropTypes.string,
        state:PropTypes.string,
        zip:PropTypes.string,
        phone:PropTypes.string,
        website:PropTypes.string,
        email:PropTypes.string,
        contact:PropTypes.string
    }),
    setAddress: PropTypes.func
};

export default AddressShow;