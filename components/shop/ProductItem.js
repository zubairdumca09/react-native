import React from 'react'
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'

const ProductItem = props => {
    let TouchableComp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableComp = TouchableNativeFeedback 
    }
    return (
        <TouchableComp onPress={props.onViewDetails}>
            <View style={styles.product}>
                <Image style={styles.image} source={{uri: props.image}}/>
                <View style={styles.details}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                </View>
                
                <View style={styles.actions}>
                    <Button title="View Details" onPress={props.onViewDetails}/>
                    <Button title="To Cart" onPress={props.onAddToCart}/>
                </View>
            </View>       
        </TouchableComp> 
    )
}

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    image: {
        width: '100%',
        height: '60%'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontFamily: 'open-sans',
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    },
    details: {
        alignItems: "center", 
        height: '15%',
        padding: 10
    }
})
export default ProductItem