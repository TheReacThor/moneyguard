import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerThunk = createAsyncThunk(() => {
  // -Kullanıcı kaydı için gerekli fonksiyon...
});

export const loginThunk = createAsyncThunk(() => {
  // -Kullanıcı girişi için gerekli fonksiyon...
});

export const logoutThunk = createAsyncThunk(() => {
  // -Kullanıcı çıkışı için gerekli fonksiyon...
});

export const refreshThunk = createAsyncThunk(() => {
  // -Kullanıcıların verilerini (balance) güncellemek için gerekli fonksiyon...
});

export const getBalanceThunk = createAsyncThunk(() => {
  // - Kullanıcıların balance'ını almak için gerekli fonksiyon...
});
