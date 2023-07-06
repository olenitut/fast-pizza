import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((el) => el.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((el) => el.pizzaId === action.payload);
      item.quantity += 1;
      item.totalPrice += item.unitPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((el) => el.pizzaId === action.payload);
      item.quantity -= 1;
      item.totalPrice -= item.unitPrice;

      if (item.quantity === 0) {
        state.cart = state.cart.filter((el) => el.pizzaId !== action.payload);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  deleteItem,
  addItem,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((acc, el) => acc + el.quantity, 0);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((acc, el) => acc + el.totalPrice, 0);

export const getQuantityById = (id) => (state) =>
  state.cart.cart.find((el) => el.pizzaId === id)?.quantity;
