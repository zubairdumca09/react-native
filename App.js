import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import productReducer from './store/reducers/product'
import cartReducer from './store/reducers/cart'
import orderReducer from './store/reducers/order'
import ShopNavigator from './navigation/ShopNavigator'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { composeWithDevTools } from "redux-devtools-extension"

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  order: orderReducer
})
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
const store = createStore(rootReducer, composeWithDevTools());
export default function App() {
  const [ fontLoaded, setFontLoaded] = useState(false);
  if(!fontLoaded){
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={()=>{
          setFontLoaded(true);
        }}
      />
    )
  }
  return (
      <Provider store={store}>
        <ShopNavigator/>
      </Provider>
  );
}
const styles = StyleSheet.create({
  screen: {
      flex: 1,
      padding: 50
    }
})


