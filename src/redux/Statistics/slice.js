import { createSlice } from "@reduxjs/toolkit";
import {
  getTransactionsCategories,
  getTransactionsSummaryByPeriod,
} from "./operations";

const initialState = {
  summary: [],
  categories: [],
  isStatisticsLoading: false,
  isStatisticsError: null,
};

const slice = createSlice({
  name: "statistics",
  initialState,
  extraReducers: (builder) => {
    builder
      //getTransactionsCategories için extraReducers
      .addCase(getTransactionsCategories.fulfilled, () => {})
      .addCase(getTransactionsCategories.pending, () => {})
      .addCase(getTransactionsCategories.rejected, () => {})
      //getTransactionsSummaryByPeriod için extraReducers
      .addCase(getTransactionsSummaryByPeriod.fulfilled, () => {})
      .addCase(getTransactionsSummaryByPeriod.pending, () => {})
      .addCase(getTransactionsSummaryByPeriod.rejected, () => {});
  },
});

export const statisticsReducer = slice.reducer;
