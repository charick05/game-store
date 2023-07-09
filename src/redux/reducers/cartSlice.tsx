import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IGames } from '../../types';

interface CartState {
   games: IGames[];
   count: number;
   totalPrice: number;
}

const initialState: CartState = {
   games: [],
   count: 0,
   totalPrice: 0
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,

   reducers: {
      addCart: (state, action: PayloadAction<IGames>) => {
         state.games.push(action.payload);
         state.count = state.games.length;
         state.totalPrice += action.payload.price;
      },
      deleteCart: (state, action: PayloadAction<IGames>) => {
         state.games = state.games.filter(game => game.id !== action.payload.id)
         state.count = state.games.length;
         state.totalPrice -= action.payload.price
      },
   },
});

export default cartSlice.reducer;
export const {addCart, deleteCart} = cartSlice.actions;