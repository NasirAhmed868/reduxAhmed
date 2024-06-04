// App.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const subCategory = {
  1: [
    {
      id: 1,
      brandName: 'Aashirvaad Aata',
      name: 'shabarmati ',
      Price: '50/kg',
      quantity: '25kg quantity in pack',
      profile_image: require('../../atom/icon/aata1.jpg'),
    },
    {
      id: 2,
      brandName: 'Aashirvaad Aata',
      name: 'Manna Atta ',
      Price: '80/kg',
      quantity: '50kg quantity in pack',
      profile_image: require('../../atom/icon/aata2.jpg'),
    },
    {
      id: 3,
      brandName: 'Aashirvaad Aata',
      name: 'Manna Atta ',
      Price: '80/kg',
      quantity: '50kg quantity in pack',
      profile_image: require('../../atom/icon/aata3.jpg'),
    },
    {
      id: 4,
      brandName: 'Aashirvaad Aata',
      name: 'Manna Atta ',
      Price: '80/kg',
      quantity: '50kg quantity in pack',
      profile_image: require('../../atom/icon/aata2.jpg'),
    },
  ],
  2: [
    {
      id: 5,
      brandName: 'Aashirvaad Aata',
      name: 'shabarmati ',
      Price: '50/kg',
      quantity: '25kg quantity in pack',
      profile_image: require('../../atom/icon/rice3.jpg'),
    },
    {
      id: 6,
      brandName: 'Aashirvaad Aata',
      name: 'Manna Atta ',
      Price: '80/kg',
      quantity: '25kg quantity in pack',
      profile_image: require('../../atom/icon/rice4.jpg'),
    },
    {
      id: 7,
      brandName: 'Aashirvaad Aata',
      name: 'shabarmati ',
      Price: '50/kg',
      quantity: '25kg quantity in pack',
      profile_image: require('../../atom/icon/rice.png'),
    },
    {
      id: 8,
      brandName: 'Aashirvaad Aata',
      name: 'shabarmati ',
      Price: '50/kg',
      quantity: '25kg quantity in pack',
      profile_image: require('../../atom/icon/rice.jpg'),
    },
    {
      id: 9,
      brandName: 'Aashirvaad Aata',
      name: 'shabarmati ',
      Price: '50/kg',
      quantity: '25kg quantity in pack',
      profile_image: require('../../atom/icon/oil.png'),
    },
    {
      id: 10,
      brandName: 'Aashirvaad Aata',
      name: 'shabarmati ',
      Price: '50/kg',
      quantity: '25kg quantity in pack',
      profile_image: require('../../atom/icon/milk.jpg'),
    },
  ],
};

const {width: windowWidth} = Dimensions.get('window');
const imageWidth = windowWidth / 2;

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {Object.keys(subCategory).map(key => (
        <View key={key} style={styles.category}>
          <Text style={styles.categoryTitle}>Category {key}</Text>
          {subCategory[key].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => navigation.navigate('ProductDetail', {item})}>
              <Image source={item.profile_image} style={styles.image} />
              <View style={styles.itemDetails}>
                <Text style={styles.brandName}>{item.brandName}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.Price}</Text>
                <Text style={styles.quantity}>{item.quantity}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  category: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  quantity: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;
