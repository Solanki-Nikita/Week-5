// features/users/userThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersAPI } from "../../services/userServices.jsx";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      return await getUsersAPI();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);