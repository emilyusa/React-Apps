import React, { Component } from 'react';
import '../App.css';
import ElfHeader from './ElfHeader';
import Home from './Home';
import Address from './Address';
import { BrowserRouter, Route } from 'react-router-dom';
import dataManager from '../tools/PouchDbManager';
import InitializeDatabase from './InitializeDatabase';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    container: {
        flexGrow: 1
    }
});

class App extends Component {



    componentDidMount() {
        this.db = dataManager.init();
    }

    render() {
        // const {classes}=this.props;
        return (
            <BrowserRouter>
            <div className="App">
                <ElfHeader />
                <Route id="home" exact path="/" component={Home} />
                <Route
                    id="address"
                    path="/address"
                    render={props => (
                        <Address {...props} dataManager={dataManager} />
                    )}
                />
                <Route
                    id="initDb"
                    path="/init-db"
                    render={props => (
                        <InitializeDatabase
                            {...props}
                            dataManager={dataManager}
                        />
                    )}
                />
            </div>
        </BrowserRouter>)
    };
}

export default withStyles(styles)(App);
