import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transaction: {
    transactionDate: '',
    type: '',
    categoryId: '',
    comment: '',
    amount: 0,
  },
  isEditModalOpen: false,
  isAddModalOpen: false,
  editId: '',
};

const slice = createSlice({
  name: 'modals',
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
    openEditModal: (state, action) => {
      state.isEditModalOpen = true;
      state.editId = action.payload;
    },
    closeEditModal: (state) => {
      state.isEditModalOpen = false;
      state.editId = '';
    },
  },
});

export const { openAddModal, closeAddModal, openEditModal, closeEditModal } = slice.actions;
export const selectIsAddModalOpen = (state) => state.modals.isAddModalOpen;
export const modalsReducer = slice.reducer;
