import React from 'react';
import {Link} from 'react-router-native';
import {Text, View} from 'react-native';
import styles from "./elf-styles";


class ElfHeader extends React.Component {
	

    render() {
        return (
            <View style={styles.nav}>
                <Link
                    to="/"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Address</Text>
                </Link>
                /<Link
                    to="/"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>GetFile</Text>
                </Link>
            </View>
        );
    }
}

export default ElfHeader;

