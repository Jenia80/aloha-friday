import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
  },
  
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload)
    },

    deleteItem: (state,action) => {
      state.itemsInCart = state.itemsInCart.filter(drink => drink.idDrink !== action.payload)
    }
  }
})

export const {setItemInCart, deleteItem} = cartSlice.actions;
export default cartSlice.reducer;
