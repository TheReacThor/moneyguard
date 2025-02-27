// Currency datayı almak için selector
export const selectCurrencyData = (state) => state.currency.data;

// Currency içinde currencyLoading bilgisini almak için selector
export const selectCurrencyLoading = (state) =>
  state.currency.isCurrencyLoading;

// Currency içinde currencyError bilgisini almak için selector
export const selectCurrencyError = (state) => state.currency.isCurrencyError;
