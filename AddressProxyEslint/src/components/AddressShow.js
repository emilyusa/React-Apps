import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
});

class AddressShow extends Component {
    render() {
        const { classes } = this.props;
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
                <p className="App-intro">State:{this.props.address.state}</p>
                <p className="App-intro">Zip:{this.props.address.zip}</p>
                <p className="App-intro">Phone:{this.props.address.phone}</p>
                <p className="App-intro">
                    Website:{this.props.address.website}
                </p>
                <p className="App-intro">Email:{this.props.address.email}</p>
                <p className="App-intro">
                    Contact:{this.props.address.contact}
                </p>
                <div className="App">
                    <Button
                        color='secondary'
                        variant='raised'
                        onClick={e => this.props.setAddress(-1, e)}
                    >
                        <Icon className={classes.rightIcon}>arrow_back</Icon>
                    </Button>

                    <Button
                        id='setAddress'
                        color='primary'
                        variant='raised'
                        onClick={e => this.props.setAddress(0, e)}
                    >
                        Address
                    </Button>
                    <Button
                        color='secondary'
                        variant='raised'
                        onClick={e => this.props.setAddress(1, e)}
                    >
                        <Icon className={classes.rightIcon}>arrow_forward</Icon>
                    </Button>
                </div>
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
        state: PropTypes.string,
        zip: PropTypes.string,
        phone: PropTypes.string,
        website: PropTypes.string,
        email: PropTypes.string,
        contact: PropTypes.string
    }),
    setAddress: PropTypes.func,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles) (AddressShow);
