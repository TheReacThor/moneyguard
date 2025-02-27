import { createSlice } from "@reduxjs/toolkit";
import { getCurrency } from "./operations";

const initialState = {
  data: null,
  isCurrencyLoading: false,
  isCurrencyError: null,
};

export const slice = createSlice({
  name: "currency",
  initialState,

  extraReducers: (builder) =>
    builder
      // getCurrency için extraReducers
      .addCase(getCurrency.fulfilled, () => {})
      .addCase(getCurrency.pending, () => {})
      .addCase(getCurrency.rejected, () => {}),
});

export const currencyReducer = slice.reducer;
