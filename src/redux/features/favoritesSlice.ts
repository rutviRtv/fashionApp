import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

const initialState: Array<IProduct> = [];

export const favoritesSlice  = createSlice({
  name: "favoritesSlice ",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<IProduct>) => {
      if(state.findIndex((pro) => pro.id === action.payload.id) === -1) {
        state.push(action.payload);
      }else{
        return state.map((item) => 
          item.id === action.payload.id ?
          {...item, quantity: item.quantity + 1}
          : item
        );
      }
    },
    
     removeFromFavorite: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id)
    },
  }
});

export const {addToFavorite, removeFromFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;