import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, FlatList, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import * as cartActions from '../../store/actions/cart'
import ProductItem from '../../components/shop/ProductItem'
import HeaderButton from '../../components/UI/HeaderButton'

const ProductsOverview = props => {
    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch();
    return <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={itemData => <ProductItem 
                                            image={itemData.item.imageUrl} 
                                            title={itemData.item.title} 
                                            price={itemData.item.price}
                                            onViewDetails={()=>{
                                                                    props.navigation.navigate('ProductDetails', 
                                                                    {
                                                                        productId: itemData.item.id,
                                                                        productTitle: itemData.item.title
                                                                    })
                                                                }
                                            }  
                                            onAddToCart={() => {
                                                dispatch(cartActions.addToCart(itemData.item))
                                            }}                 
                                        />} 

            />
}
ProductsOverview.navigationOptions = navData => {
    return {
        headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="Cart" 
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} 
                onPress={()=>{
                    navData.navigation.toggleDrawer();
                }}/>
        </HeaderButtons>),
        headerTitle: "All Products",
        headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item 
                            title="Cart" 
                            iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
                            onPress={()=>{
                                navData.navigation.navigate('Cart')
                            }}/>
                    </HeaderButtons>)
    }
    
}
const styles = StyleSheet.create({
    
});
export default ProductsOverview;