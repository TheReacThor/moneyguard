import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Slice'lar
import { authReducer } from "./Auth/slice";
import { currencyReducer } from "./Currency/slice";
import { modalsReducer } from "./Modals/slice";
import { statisticsReducer } from "./Statistics/slice";
import { transactionReducer } from "./Transactions/slice";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ['auth'], Hangi slice localstorage'a kaydediliceğini yazıcaz buraya örn. auth-token
};

const rootReducer = combineReducers({
  auth: authReducer,
  transactions: transactionReducer,
  statistics: statisticsReducer,
  currency: currencyReducer,
  modals: modalsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
