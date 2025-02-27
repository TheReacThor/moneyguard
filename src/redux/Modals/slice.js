import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transaction: {
    transactionDate: "",
    type: "",
    categoryId: "",
    comment: "",
    amount: 0,
  },
  isEditModalOpen: false,
  isAddModalOpen: false,
  isEditId: "",
};

const slice = createSlice({
  name: "modals",
  initialState,
  selectors: {
    /* burası modal yapıldıktan sonra doldurulucak */
  },
  reducers: {
    /* burası modal yapıldıktan sonra doldurulucak */
  },
});

export const modalsReducer = slice.reducer;
