import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    container: {
        flexGrow: 1,
        textAlign: 'center'
    },
    rootBar: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3
    })
});

class AddressEditFields extends Component {
    render() {
        return (
            <div>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="First Name"
                    type="string"
                    value={this.props.address.firstName}
                    onChange={e =>
                        this.props.addressChangedByUser('firstName', e)
                    }
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="lastname"
                    label="Last Name"
                    type="string"
                    value={this.props.address.lastName}
                    onChange={e =>
                        this.props.addressChangedByUser('lastName', e)
                    }
                    fullWidth
                />
            </div>
        );
    }
}

AddressEditFields.propTypes = {
    addressChangedByUser: PropTypes.func,
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
    })
};

export default withStyles(styles)(AddressEditFields);
