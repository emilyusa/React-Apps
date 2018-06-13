import React, { Component } from 'react';
import '../App.css';
import AddressShow from './AddressShow';
import PropTypes from 'prop-types';
import PouchDB from 'pouchdb';
import addresses from '../address-list';

class Address extends Component {
    constructor(props) {
        super(props);
        this.canceled = false;
        this.state = {
            editOpen: false,
            namesIndex: 0,
            names: [
                {
                    _id: 'unknown',
                    firstName: 'unknown',
                    lastName: 'unknown',
                    street: 'unknown',
                    city: 'unknown',
                    state: 'unknown',
                    zip: 'unknown',
                    phone: 'unknown',
                    website: 'unknown',
                    email: 'unknown',
                    contact: 'unknown'
                }
            ]
        };
    }

    componentDidMount() {
        this.db = new PouchDB('address-list-chunyan');
        this.remoteCouch =
            'http://IP_Address:5984/addressLinks to an external site.';
        this.syncDom = document.getElementById('sync-wrapper');

        this.db
            .changes({
                since: 'now',
                live: true
            })
            .on('change', this.showAddress);
    }

    componentWillUnmount() {
        this.canceled = true;
    }

    watcher = event => {
        console.log('Watch Change', event);
        this.showAddress();
    };

    showAddress = () => {
        const that = this;
        return that.props.dataManager.db
            .find({
                selector: { lastName: { $gt: null } },
                sort: ['lastName']
            })
            .then(response => {
                console.log('RECORD COUNT:', response.docs.length);
                const names = response.docs.map(address => {
                    return {
                        _id: address._id,
                        _rev: address._rev,
                        firstName: address.firstName,
                        lastName: address.lastName,
                        street: address.street,
                        city: address.city,
                        state: address.state,
                        zip: address.zip,
                        phone: address.phone,
                        website: address.website,
                        email: address.email,
                        contact: address.contact
                    };
                });
                if (!this.canceled) {
                    that.setState({ names: names });
                }
            });
    };

    setAddress = offset => {
        if (offset === 0) {
            this.setState({ names: addresses[1], open: this.state.editOpen });
        } else {
            const value = this.state.namesIndex + offset;
            if (value >= 0 && value <= this.state.names.length - 1) {
                this.setState({ namesIndex: value, open: this.state.editOpen });
            }
        }
    };

    save = name => {
        console.log(name);
        this.props.dataManager
            .save(name)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    delete = name => {
        this.props.dataManager
            .delete(name._id)
            .then(function(result) {
                console.log('BAR', result);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

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

    render() {
        return (
            <AddressShow
                name={this.state.names[this.state.namesIndex]}
                showAddress={this.showAddress}
                setAddress={this.setAddress}
                save={this.save}
                delete={this.delete}
            />
        );
    }
}

Address.propTypes = {
    dataManager: PropTypes.shape({
        watchChanges: PropTypes.func,
        save: PropTypes.func,
        delete: PropTypes.func
    }),
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
    open: PropTypes.bool
};

export default Address;
