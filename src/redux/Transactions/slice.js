import { createSlice } from "@reduxjs/toolkit";
import {
  addTransactions,
  deleteTransactions,
  editTransactions,
  getTransactions,
} from "./operations";

const initialState = {
  isTransLoading: false,
  isTransError: null,
  transactions: [],
};

const slice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: (builder) => {
    builder
      // getTransactions için extraReducers
      .addCase(getTransactions.fulfilled, () => {})
      .addCase(getTransactions.pending, () => {})
      .addCase(getTransactions.rejected, () => {})

      // addTransactions için extraReducers
      .addCase(addTransactions.fulfilled, () => {})
      .addCase(addTransactions.pending, () => {})
      .addCase(addTransactions.rejected, () => {})

      // deleteTransactions için ekstraReducers
      .addCase(deleteTransactions.fulfilled, () => {})
      .addCase(deleteTransactions.pending, () => {})
      .addCase(deleteTransactions.rejected, () => {})

      // editTransactions için ekstraReducers
      .addCase(editTransactions.fulfilled, () => {})
      .addCase(editTransactions.pending, () => {})
      .addCase(editTransactions.rejected, () => {});

    // Proje tamamlandığında birbirini tekrar eden extraReducerlar için bir fonksiyon yazılabilir
  },
});

export const transactionReducer = slice.reducer;
