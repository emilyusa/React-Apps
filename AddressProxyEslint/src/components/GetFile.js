import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './elf-styles';


class GetFile extends React.Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }

    getFile = () => {
        this.setState({ file: 'url-file.js' });
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">file:{this.state.file}</p>
                <Button
                    id="getFile"
                    label="Get File"
                    variant="raised"
                    style={styles.button}
                    onClick={this.getFile}
                >
                Get File
                </Button>
            </div>
        );
    }
}

export default GetFile;
