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
    openAddModal: (state) => {
      state.isAddModalOpen = true;
    },
    closeAddModal: (state) => {
      state.isAddModalOpen = false;
    },
  },
});

export const { openAddModal, closeAddModal } = slice.actions;
export const selectIsAddModalOpen = (state) => state.modals.isAddModalOpen;
export const modalsReducer = slice.reducer;
