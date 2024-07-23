import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

export const fetchExcuses = createAsyncThunk(
  "excuses/fetchExcuses",
  async () => {
    const response = await fetch("http://localhost:4000/excuses");
    const data = await response.json();
    return data.excuses;
  }
);

const getRandomExcuses = (excuses) => {
  const index = Math.floor(Math.random() * excuses.length);
  return excuses[index];
};

const excusesSlice = createSlice({
  name: "excuses",
  initialState: {
    list: [],
    currentExcuse: "",
    status: "idle",
    error: null,
  },
  reducers: {
    generateExcuse: (state) => {
      if (state.list.length === 0) {
        return;
      }

      state.currentExcuse = getRandomExcuses(state.list);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExcuses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExcuses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;

        if (state.list.length > 0) {
          state.currentExcuse = getRandomExcuses(state.list);
        }
      })
      .addCase(fetchExcuses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { generateExcuse } = excusesSlice.actions;

export default excusesSlice.reducer;
