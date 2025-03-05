// transactionsSlice içinden transaction'ları almak için selector
export const selectTransactions = (state) => state.transactions.items;

// transactionsSlice içinden isLoading bilgisini almak için selector
export const selectTransLoading = (state) => state.transactions.isLoading;

// transactionsSlice içinden error bilgisini almak için selector
export const selectTransError = (state) => state.transactions.error;
// modalsSlice içinden isEditID bilgisini almak için selector
export const selectIsEditID = (state) => state.modals.isEditID;
