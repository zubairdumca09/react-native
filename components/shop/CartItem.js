import React from 'react'
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const CartItem = props => {
    let TouchableComp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableComp = TouchableNativeFeedback 
    }
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.qty}>{props.quantity}</Text><Text>{"  "}</Text><Text style={styles.title}>{props.title}</Text>
            </View>
            
            
            <View style={styles.itemData}>
                <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
                <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
                    <Ionicons 
                        name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                        size={23}
                        color="red"
                    />
                </TouchableOpacity>
            </View>
        </View>       
    )
}

const styles = StyleSheet.create({
    cartItem : {
        padding: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 20,
        backgroundColor: 'white'
    },
    itemData: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        marginVertical: 4
    },
    amount: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        marginVertical: 4
    },
    qty: {
        fontFamily: 'open-sans',
        fontSize: 16,
        color: '#888'
    },
    deleteButton: {
        marginLeft: 20
    }
})
export default CartItem