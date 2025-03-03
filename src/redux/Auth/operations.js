import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBalance, register, login, logout, refreshUser } from "../../services/auth-api";

export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  // -Kullanıcı kaydı için gerekli fonksiyon...
  try {
    const data = await register(credentials);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  // -Kullanıcı girişi için gerekli fonksiyon...
  try {
    const data = await login(credentials);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    console.log("logoutThunk çalışıyor...");

    // Çıkış API isteği gönderiliyor
    const response = await logout();

    console.log("Çıkış başarılı:", response);

    // LocalStorage'dan token siliniyor
    localStorage.removeItem("token");

    // Başarılıysa veriyi döndür
    return response;
  } catch (error) {
    console.error("logoutThunk hata:", error);

    // Hata mesajını yakala ve redux'a gönder
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});


export const refreshThunk = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  // -Kullanıcıların verilerini (balance) güncellemek için gerekli fonksiyon...
  try {
    const data = await refreshUser();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getBalanceThunk = createAsyncThunk('auth/getBalance', async (_, thunkAPI) => {
  // - Kullanıcıların balance'ını almak için gerekli fonksiyon...
  try {
    const data = await getBalance();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
