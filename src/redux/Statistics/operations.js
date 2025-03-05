import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getTransactionSummary, getCategories } from "../../services/statistics-api";

export const getTransactionsSummaryByPeriod = createAsyncThunk(
  "statistics/getTransactionsSummaryByPeriod",
  async (params, thunkAPI) => {
    try {
      const data = await getTransactionSummary(params);
      return data;
    } catch (error) {
      toast.error(error.response?.data?.message || "İşlem özeti alınamadı");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTransactionsCategories = createAsyncThunk(
  "statistics/getTransactionsCategories",
  async (_, thunkAPI) => {
    try {
      const data = await getCategories();
      return data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Kategoriler alınamadı");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
