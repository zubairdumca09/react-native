import React from 'react';
import { FlatList, View, Text, StyleSheet, Platform } from 'react-native'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../components/UI/HeaderButton'
import OrderItem from '../../components/shop/OrderItem'
const Order = props => {
    
    const orders = useSelector(state => state.order.orders)
    console.log(orders, "zubair")
    return <FlatList
                data={orders}
                keyExtractor={item => item.id}
                renderItem={itemdata => <OrderItem
                                            amount={itemdata.item.totalAmount}
                                            date={itemdata.item.date}
                                        />}
            />
}
Order.navigationOptions = navData => {
    return {
        headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="Cart" 
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} 
                onPress={()=>{
                    navData.navigation.toggleDrawer();
                }}/>
        </HeaderButtons>),
        headerTitle: "Your Orders"
        
    }
    
}
const styles = StyleSheet.create({

})
export default Order;