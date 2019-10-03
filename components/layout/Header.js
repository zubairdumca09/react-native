import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = props => {
    console.log("Zubair")
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>    
        </View>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20,
        color: 'white',
    },
    header: {
        width: '100%',
        height: 90,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#f7287b'
    }
})
export default Header;