import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionsByCategory
} from "../../services/transactions-api";
import { toast } from "react-toastify";

// Tüm işlemleri getirmek için thunk
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await getAllTransactions();
      return data;
    } catch (error) {
      toast.error(error.response.data.message || "Failed to fetch transactions");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// İşlem eklemek için thunk
export const createTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (transactionData, thunkAPI) => {
    try {
      const data = await addTransaction(transactionData);
      toast.success("Transaction added successfully");
      return data;
    } catch (error) {
      toast.error(error.response.data.message || "Failed to add transaction");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// İşlem güncellemek için thunk
export const editTransaction = createAsyncThunk(
  "transactions/updateTransaction",
  async ({ transactionId, transactionData }, thunkAPI) => {
    try {
      const data = await updateTransaction(transactionId, transactionData);
      toast.success("Transaction updated successfully");
      return data;
    } catch (error) {
      toast.error(error.response.data.message || "Failed to update transaction");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// İşlem silmek için thunk
export const removeTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (transactionId, thunkAPI) => {
    try {
      const data = await deleteTransaction(transactionId);
      toast.success("Transaction deleted successfully");
      return data;
    } catch (error) {
      toast.error(error.response.data.message || "Failed to delete transaction");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Kategoriye göre işlem getirmek için
export const fetchTransactionsByCategory = createAsyncThunk(
  "transactions/fetchByCategory",
  async (category, thunkAPI) => {
    try {
      const data = await getTransactionsByCategory(category);
      return data;
    } catch (error) {
      toast.error(error.response.data.message || "Failed to fetch transaction");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
