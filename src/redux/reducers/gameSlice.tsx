import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchGames } from "../asyncReducers/fetchGames";
import { IGames } from "../../types";

interface GameState {
   games: IGames[];
   isLoading: boolean;
   error: null | string;
}

const initialState: GameState = {
   games: [],
   error: null,
   isLoading: false
}

const gameSlice = createSlice({
   name: 'games',
   initialState,

   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchGames.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(fetchGames.fulfilled, (state, action) => {
            state.isLoading = false;
            state.games = action.payload;
         })
         .addMatcher(isError, (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
         })
   }
})
export default gameSlice.reducer;

function isError(action: AnyAction) {
   return action.type.endsWith('rejected');
}
