import React from 'react';
import { Text, View, FlatList, StyleSheet, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem'
import * as ordersActions from '../../store/actions/order'
import * as cartActions from '../../store/actions/cart'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const Cart = props => {
    const cartTotal = useSelector(state => (state.cart.totalAmount))
    const dispatch  = useDispatch();
    const cartItems = useSelector(state => {
         const data = [];
         for(var key in state.cart.items){
             data.push({
                 productId: key,
                 price: state.cart.items[key].price,
                 quantity: state.cart.items[key].quantity,
                 title: state.cart.items[key].title,
                 sum: state.cart.items[key].sum,
             })
         }
         return data;
    })
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total: <Text style={styles.amount}>${cartTotal.toFixed(2)}</Text> </Text>
                <Button title="Order Now"
                    onPress={()=>{
                        dispatch(ordersActions.addOrder(cartItems, cartTotal))
                    }}
                />
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => <CartItem
                                            title={itemData.item.title}
                                            quantity={itemData.item.quantity}
                                            amount={itemData.item.sum}
                                            onRemove={()=>{}}
                                        />}
            />
        </View>
    )
}
Cart.navigationOptions = {
    headerTitle: 'Your Cart'
}
const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',

    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
        color: Colors.primary
    }
})
export default Cart;