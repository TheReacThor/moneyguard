import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTransactions = createAsyncThunk(() => {
  // transaction'ları almak için gerekli fonskiyon
});

export const addTransactions = createAsyncThunk(() => {
  // transaction eklemek için gerekli fonksiyon
});

export const deleteTransactions = createAsyncThunk(() => {
  // transaction silmek için gerekli fonskiyon
});

export const editTransactions = createAsyncThunk(() => {
  // transaction düzenlemek için gerekli fonskiyon
});
