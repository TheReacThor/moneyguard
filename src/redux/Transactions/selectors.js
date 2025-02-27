// transactionsSlice içinden transaction'ları almak için selector
export const selectTransactions = (state) => state.transactions.transactions;

// transactionsSlice içinden isTransLoading bilgisini almak için selector
export const selectTransLoading = (state) => state.transactions.isTransLoading;

// transactionsSlice içinden isTransError bilgisini almak için selector selector
export const selectTransError = (state) => state.transactions.isTransError;
