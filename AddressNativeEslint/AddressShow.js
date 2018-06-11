import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './elf-styles';
import PropTypes from 'prop-types';

export default class AddressShow extends React.Component {
    render() {
        return (
            <View style={styles.displayArea}>
                <View style={styles.centerContent} id="addressShow">
                    <Text style={styles.header}>
                        firstName:{this.props.address.firstName}
                    </Text>

                    <Text style={styles.header}>
                        lastName:{this.props.address.lastName}
                    </Text>

                    <Text style={styles.header}>
                        Street:{this.props.address.street}
                    </Text>

                    <Text style={styles.header}>
                        City:{this.props.address.city}
                    </Text>

                    <Text style={styles.header}>
                        State:{this.props.address.state}
                    </Text>

                    <Text style={styles.header}>
                        Zip:{this.props.address.zip}
                    </Text>

                    <Text style={styles.header}>
                        Phone:{this.props.address.phone}
                    </Text>

                    <Text style={styles.header}>
                        Websit:{this.props.address.website}
                    </Text>

                    <Text style={styles.header}>
                        Email:{this.props.address.email}
                    </Text>

                    <Text style={styles.header}>
                        Contact:{this.props.address.contact}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Button
                            id="Backward"
                            color="darkturquoise"
                            title="<<"
                            onPress={event =>
                                this.props.setAddress(0, -1, event)
                            }
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button
                            id="Backward"
                            color="darkturquoise"
                            title="<"
                            onPress={event =>
                                this.props.setAddress(-1, 0, event)
                            }
                        />
                    </View>
                    {/*<View style={{flex:1}}>*/}
                    {/*<Button*/}
                    {/*id="setAddress"*/}
                    {/*color="darkturquoise"*/}
                    {/*title="||"*/}
                    {/*onPress={event => this.props.setAddress(0,0, event)}*/}
                    {/*/>*/}
                    {/*</View>*/}
                    <View style={{ flex: 1 }}>
                        <Button
                            id="Forward"
                            color="darkturquoise"
                            title=">"
                            onPress={event =>
                                this.props.setAddress(1, 0, event)
                            }
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button
                            id="Forward"
                            color="darkturquoise"
                            title=">>"
                            onPress={event =>
                                this.props.setAddress(0, 1, event)
                            }
                        />
                    </View>
                </View>
            </View>
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
    setAddress: PropTypes.func
};
