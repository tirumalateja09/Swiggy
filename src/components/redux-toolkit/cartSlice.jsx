import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] 
  },
  reducers: {
    addItems: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.product.card.info.id === action.payload.card.info.id
      );

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push({ product: action.payload, count: 1 });
      }
    },
    removeItems: (state, action) => {
      const itemIdToRemove = action.payload.card.info.id;

      const item = state.items.find(
        (item) => item.product.card.info.id === itemIdToRemove
      );

      if (item) {
        if (item.count > 1) {
         
          item.count -= 1;
        } else {
          
          state.items = state.items.filter(
            (item) => item.product.card.info.id !== itemIdToRemove
          );
        }
      }
    },
    paidItemClear:(state,action)=>{
        state.items=state.items.filter((item)=>{
         return item.product.card.info.id!==action.payload.card.info.id;
        })
    },
    clearCart: (state) => {
      state.items.length=0;
    },
    removeProduct:(state,action)=>{
        state.items=state.items.filter((item)=>{
    return item.product.card.info.id!==action.payload.card.info.id;  
        })
    }
  }
});

export const { addItems, removeItems, clearCart,  paidItemClear ,removeProduct} = cartSlice.actions;
export default cartSlice.reducer;
