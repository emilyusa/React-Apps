import React from 'react';
import {Link} from 'react-router-native';
import {Text, View} from 'react-native';
import styles from "./elf-styles";

export default class ElfHeader extends React.Component {

    render() {
        return (
            <View style={styles.nav}>
                <Link
                    to="/"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Address</Text>
                </Link>
                <Link
                    to="/get-file"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>GetFile</Text>
                </Link>
            </View>
        );
    }
}

