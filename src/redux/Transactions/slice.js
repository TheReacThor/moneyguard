import { createSlice } from "@reduxjs/toolkit";
import { 
  fetchTransactions, 
  createTransaction, 
  editTransaction, 
  removeTransaction, 
  fetchTransactionsByCategory 
} from "./operations";

const slice = createSlice({
  name: "transactions",
  initialState: {
    items: [], // İşlem listesi
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.items.push(action.payload); // Yeni işlemi listeye ekle
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        // Güncellenen işlemi listede bul ve güncelle
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        // Silinen işlemi listeden kaldır
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      })
      .addCase(fetchTransactionsByCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTransactionsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTransactionsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const transactionReducer = slice.reducer;
