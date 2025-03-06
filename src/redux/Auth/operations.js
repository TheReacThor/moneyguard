import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  userTransactionsApi,
  setToken,
  removeToken,
} from "../../config/userTransactionApi";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    // -Kullanıcı kaydı için gerekli fonksiyon...
    try {
      const { data } = await userTransactionsApi.post(
        "/api/auth/sign-up",
        credentials
      );
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    // -Kullanıcı girişi için gerekli fonksiyon...
    try {
      const { data } = await userTransactionsApi.post(
        "/api/auth/sign-in",
        credentials
      );
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      console.log("logoutThunk çalışıyor...");

      // Çıkış API isteği gönderiliyor
      const { data } = await userTransactionsApi.delete("/api/auth/sign-out");

      console.log("Çıkış başarılı:", data);

      // LocalStorage'dan token siliniyor
      removeToken();

      // Başarılıysa veriyi döndür
      return data;
    } catch (error) {
      console.error("logoutThunk hata:", error);

      // Hata mesajını yakala ve redux'a gönder
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkAPI.rejectWithValue("Token doesn't exist");
    }

    try {
      const { data } = await userTransactionsApi.get("/api/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBalanceThunk = createAsyncThunk(
  "getBalannce",
  async (_, thunkAPI) => {
    // - Kullanıcıların balance'ını almak için gerekli fonksiyon...
    try {
      const { data } = await userTransactionsApi.get("/api/users/current");
      return data.balance;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
