import { configureStore } from "@reduxjs/toolkit"
import gamereducer from "./reducers/gameSlice";
import gamePageReducer from "./reducers/gamePageSlice";
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
   reducer: {
      games: gamereducer,
      game: gamePageReducer,
      cart: cartReducer
   },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;