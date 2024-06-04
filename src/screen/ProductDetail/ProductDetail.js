// ProductDetail.js
import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {cartSlice, addToCart, removeFromCart} from '../../store/cartSlice';
import {useDispatch} from 'react-redux';

const ProductDetail = ({route}) => {
  const dispatch = useDispatch();
  const {item} = route.params;
  //   const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Image source={item.profile_image} style={styles.image} />
      <Text style={styles.brandName}>{item.brandName}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.Price}</Text>
      <Text style={styles.quantity}>{item.quantity}</Text>
      <TouchableOpacity
        onPress={() => dispatch(addToCart(item))}
        style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(removeFromCart(item))}
        style={styles.button}>
        <Text style={styles.buttonText}>Remove from cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  brandName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    color: 'gray',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  quantity: {
    fontSize: 16,
    color: 'gray',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default ProductDetail;
