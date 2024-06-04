// Navigation.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//// The product detail screen

import {store} from './src/store/store';
import {Provider} from 'react-redux';
import CartScreen from './src/screen/CartScreen/CartScreen';
import Header from './src/atom/Header/Header';
import ProductDetail from './src/screen/ProductDetail/ProductDetail';
import HomeScreen from './src/screen/homeScreen/homeScreen';
import {View} from 'react-native';

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: () => <Header />, // Use the custom header
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
