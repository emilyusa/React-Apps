import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the React World</h1>
            </div>
        );
    }
}

//export default Home;
export default withStyles(styles)(Home);
