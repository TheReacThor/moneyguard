import { createSlice } from "@reduxjs/toolkit";
import {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
  getBalanceThunk,
} from "./operations";

const authInitialState = {
  user: {
    name: null,
    email: null,
    balance: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthLoading: false,
  isAuthError: null,
  // ^^ ^^ ^^
  //Burdaki ekstra initial state'ler dinamik verilerde işlenmesi gereken stateler şimdilik bu şekilde yaptım kim çalışıcaksa o şekilde düzenleyebilir.
  //Örn; logIn fonksiyonu fullfilled olduğunda state.isLoggedIn = true; gibi...
};

const slice = createSlice({
  name: "auth",
  initialState: authInitialState,
  extraReducers: (builder) => {
    builder
      // registerThunk için extraReducers
      .addCase(registerThunk.fulfilled, () => {})
      .addCase(registerThunk.pending, () => {})
      .addCase(registerThunk.rejected, () => {})

      // loginThunk için extraReducers
      .addCase(loginThunk.fulfilled, () => {})
      .addCase(loginThunk.pending, () => {})
      .addCase(loginThunk.rejected, () => {})

      // logoutThunk için ekstraReducers
      .addCase(logoutThunk.fulfilled, () => {})
      .addCase(logoutThunk.pending, () => {})
      .addCase(logoutThunk.rejected, () => {})

      // refreshThunk için ekstraReducers
      .addCase(refreshThunk.fulfilled, () => {})
      .addCase(refreshThunk.pending, () => {})
      .addCase(refreshThunk.rejected, () => {})

      // getBalanceThunk için ekstraReducers
      .addCase(getBalanceThunk.fulfilled, () => {})
      .addCase(getBalanceThunk.pending, () => {})
      .addCase(getBalanceThunk.rejected, () => {});

    // Proje tamamlandığında birbirini tekrar eden extraReducerlar için bir fonksiyon yazılabilir
  },
});

export const authReducer = slice.reducer;
