
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import favoritesReducer from "./features/favoritesSlice";
//configuring a Redux store
export const store = configureStore({
  //slices: cartReducer and favoritesReducer. Reducers are functions responsible for handling actions and updating the state.
  reducer: {
    cartReducer,
    favoritesReducer,
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// dispatch is a function used to send actions to the Redux store. 
//  getState allows you to retrieve the current state at any point in time.