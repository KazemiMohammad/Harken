import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUserList } from "../../data/User";

const login = createAsyncThunk(
  "users/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await GetUserList();
      if (response.data.results.length > 0) {
        return response.data.results[0];
      } else {
        rejectWithValue("Username or password is not valid!");
      }
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
   user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export { login };
export default userSlice.reducer;
