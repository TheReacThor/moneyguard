import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionsByCategory,
} from "../../services/transactions-api";

// Tüm işlemleri getirmek için thunk
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await getAllTransactions();
      return data;
    } catch (error) {
      toast.error(
        error.response.data.message || "Failed to fetch transactions"
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// İşlem eklemek için thunk
export const addTransactions = createAsyncThunk(
  "transactions/addTransaction",
  async (transactionData, thunkAPI) => {
    try {
      // API çağrısı burada yapılacak
      console.log("Transaction data:", transactionData);
      toast.success("Transaction added successfully");
      return transactionData;
    } catch (error) {
      toast.error(error.message || "Failed to add transaction");
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
      toast.error(
        error.response.data.message || "Failed to delete transaction"
      );
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
      toast.error(
        error.response.data.message || "Failed to update transaction"
      );
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
