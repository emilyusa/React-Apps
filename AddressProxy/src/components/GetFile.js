import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './elf-styles';
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';

class GetFile extends React.Component {

    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }

    getFile = () => {
        this.setState({file: 'url-file.js'})
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">file:{this.state.file}</p>
                <RaisedButton
                    id="getFile"
                    label="Get File"
                    labelPosition="before"
                    primary={true}
                    icon={
                        <FontIcon className="material-icons" color={red500}>
                            account_circle
                        </FontIcon>
                    }
                    style={styles.button}
                    onClick={this.getFile}
                />
            </div>
        );
    }
}

export default GetFile;
