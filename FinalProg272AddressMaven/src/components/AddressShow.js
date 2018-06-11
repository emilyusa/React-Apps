import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import AddressEdit from './AddressEdit';
import PropTypes from 'prop-types';

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

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editOpen: false,
            edits: {
                _id: 'unknown',
                firstName: 'unknown',
                lastName: 'unknown'
            }
        };
    }

    setEdits = (name, event) => {
        var data = this.props.name;
        data[name] = event.target.value;
        this.setState({ edits: data });
    };

    addressEdit = address => {
        console.log(address);

        if (!address) {
            return this.setState({ editOpen: false });
        }

        this.setState({
            edits: address,
            editOpen: false
        });
    };

    save = () => {
        this.props.save(this.state.edits);
    };

    render() {
        const { classes } = this.props;

        const editDialog = this.state.editOpen ? (
            <AddressEdit
                address={this.props.name}
                open={this.state.editOpen}
                addressEdit={this.addressEdit}
            />
        ) : (
            <div />
        );

        return (
            <div className={classes.container}>
                <Paper className={classes.rootBar}>
                    <p>{this.props.name.firstName}</p>
                    <p>{this.props.name.lastName}</p>
                    <p>{this.props.name.street}</p>
                    <p>{this.props.name.city}</p>
                    <p>{this.props.name.state}</p>
                    <p>{this.props.name.zip}</p>
                    <p>{this.props.name.phone}</p>
                    <p>{this.props.name.website}</p>
                    <p>{this.props.name.email}</p>
                    <p>{this.props.name.contact}</p>
                    <Button
                        id="setAddress"
                        color="secondary"
                        variant="raised"
                        onClick={this.props.showAddress}
                    >
                        Show
                    </Button>

                    <Button
                        id="back"
                        color="secondary"
                        variant="raised"
                        onClick={event => this.props.setAddress(-1, event)}
                    >
                        Back
                    </Button>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={event => this.props.setAddress(1, event)}
                    >
                        Forward
                    </Button>
                    <div>
                        <div className={classes.container}>
                            <Button
                                id="edit"
                                color="secondary"
                                variant="raised"
                                onClick={() =>
                                    this.setState({ editOpen: true })
                                }
                            >
                                Edit
                            </Button>
                            {editDialog}
                        </div>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={this.save}
                        >
                            Save
                        </Button>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={event =>
                                this.props.delete(this.props.name, event)
                            }
                        >
                            Delete
                        </Button>
                    </div>
                </Paper>
            </div>
        );
    }
}

AddressShow.propTypes = {
    name: PropTypes.shape({
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
    showAddress: PropTypes.func,
    delete: PropTypes.func,
    save: PropTypes.func,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddressShow);
