import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectCart} from '../../store/cartSlice';

const Header = () => {
  const navigation = useNavigation();
  const cartCount = useSelector(selectCart) ?? [];
  console.log('cartCount', cartCount);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Store</Text>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('CartScreen')}>
        <Text style={styles.cartButtonText}>Cart ({cartCount?.length})</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Header;
