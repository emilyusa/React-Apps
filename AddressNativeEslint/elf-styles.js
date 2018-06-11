import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,
        marginTop: 24,
        marginBottom:1,
        padding: 50,
        backgroundColor:'powderblue'
    },
    nav:{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'skyblue'
    },
    displayArea:{
        flexDirection:'column',
        backgroundColor:'steelblue'
    },
    centerContent:{
        justifyContent:'center',
        alignItems:'center'
    },

    header: {
        fontSize: 20
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    subNavItem: {
        padding: 5
    },
    topic: {
        textAlign: 'center',
        fontSize: 15
    },
    buttonView: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: '75%'
    }
});
