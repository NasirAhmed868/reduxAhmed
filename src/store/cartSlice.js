import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log('action', action.payload);
      console.log('sate', state);
      const {id} = action.payload;
      const isItemExist = state?.find(item => item.id === id);
      if (isItemExist) {
        return state?.map(item =>
          item.id == id ? {...item, quantity: item.quantity + 1} : item,
        );
      } else {
        return [...state, {...action.payload, quantity: 1}];
      }
    },
    removeFromCart: (state, action) => {
      console.log('fvfadrr', action.payload.id);

      const rsddd = state?.map(item =>
        item.id == action.payload.id
          ? {...item, quantity: item.quantity - 1}
          : item,
      );
      console.log('print', rsddd);
      return rsddd;
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export const selectCartCount = state => state.cart.cartCount;
export default cartSlice.reducer;
