import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import ProductsOverview from '../screens/shop/ProductsOverview'
import ProductDetails from '../screens/shop/ProductDetails'
import Cart from '../screens/shop/Cart'
import Order from '../screens/shop/Orders'
import colors from '../constants/Colors'
import { Platform } from 'react-native'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primary: ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary
}
const ProductsNavigator = createStackNavigator({
    ProductsOverview,ProductDetails,Cart
},{
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons 
                                        name={Platform.OS==='android' ? 'md-list': 'ios-list'} 
                                        color={drawerConfig.tintColor}
                                        size={23}/>

    },
    defaultNavigationOptions: defaultNavOptions
}

)
const OrdersNavigator = createStackNavigator({Order},
    {
        navigationOptions: {
            drawerIcon: drawerConfig => <Ionicons 
                                            name={Platform.OS==='android' ? 'md-list': 'ios-list'} 
                                            color={drawerConfig.tintColor}
                                            size={23}/>

        },
        defaultNavigationOptions: defaultNavOptions
    }
)
const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator, Orders: OrdersNavigator
},{
    contentOptions: {
        activeTintColor: Colors.primary
    },
    
}
)

export default createAppContainer(ShopNavigator)