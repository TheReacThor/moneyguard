import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTransactionsSummaryByPeriod = createAsyncThunk(() => {
  // transaction summary periodlarını (ay, yıl) almak için gerekli fonksiyon...
});

export const getTransactionsCategories = createAsyncThunk(() => {
  // transaction kategorilerini almak için gerekli fonksiyon...
});
