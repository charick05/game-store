import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchGame } from "../asyncReducers/fetchGame";
import { IGames } from "../../types";

interface IGamePageState {
   game: IGames;
   isLoading: boolean;
   error: null | string;
}

const initialState: IGamePageState = {
   game: {
           "id": "",
           "image": "",
           "title": "",
           "genres": [
                       "",
                       ""
                     ],
           "price": 0,
           "video": "",
           "description": ""
         },

   isLoading: false,
   error: null
}

const gamePageSlice = createSlice({
   name: 'game',
   initialState,

   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchGame.pending, state => {
         state.isLoading = true;
         state.error = null;
      })
      .addCase(fetchGame.fulfilled, (state, action: PayloadAction<IGames>) => {
         state.isLoading = false;
         state.game = action.payload;
         state.error = null;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      })
   }
});

export default gamePageSlice.reducer;

function isError(action: AnyAction) {
   return action.type.endsWith("rejected");
}