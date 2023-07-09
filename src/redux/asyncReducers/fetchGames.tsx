import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGames } from "../../types";

export const fetchGames = createAsyncThunk<IGames[], string | undefined, {rejectValue: string}>(
   'games/fetchGames',
   async (title, {rejectWithValue}) => {
      const response = await fetch(`https://645e58a412e0a87ac0ee003f.mockapi.io/items?title=${title ? title : ""}`);
      if (!response.ok) {
         return rejectWithValue("Ошибка при загрузки данных..");
      }
      const data = await response.json();
      return data;
   }
);