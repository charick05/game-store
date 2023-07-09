import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGames } from "../../types";

export const fetchGame = createAsyncThunk<IGames, string, {rejectValue: string}>(
   'game/fetchGame',
   async(id, {rejectWithValue}) => {
      const response = await fetch(`https://645e58a412e0a87ac0ee003f.mockapi.io/items/${id}`);
      if(!response.ok) {
         return rejectWithValue("Ошибка при загрузки данных")
      }
      const game = await response.json();
      return game;
   }
)