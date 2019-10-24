import React from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
import Colors from '../../constants/Colors'
const OrderItem = props => {
    console.log(props, "zubair1")
    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.date}>${props.amount}</Text>
            </View>
            <View style={styles.buttonContaiber}>
                <Button color={Colors.primary} style={styles.Button} title="Show Details" />
            </View>
            
        </View>       
    )
}

const styles = StyleSheet.create({
    orderItem : {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10
    },
    buttonContaiber: {
        flexDirection: 'row',
        justifyContent: "center"
    },
    summary: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '100%'
    },
    amount: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        marginVertical: 4
    },
    date: {
        fontFamily: 'open-sans',
        fontSize: 16,
        marginVertical: 4,
        color: '#888'
    },
    
})
export default OrderItem