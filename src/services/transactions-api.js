import { instance } from './auth-api';

// Tüm işlemleri getir
export const getAllTransactions = async () => {
    const { data } = await instance.get('/api/transactions');
    return data;
};

// İşlem ekle
export const addTransaction = async (transactionData) => {
    const { data } = await instance.post('/api/transactions', transactionData);
    return data;
};

// İşlem güncelle
export const updateTransaction = async (transactionId, transactionData) => {
  const { data } = await instance.patch(`/api/transactions/${transactionId}`, transactionData);
  return data;
};

// İşlem sil
export const deleteTransaction = async (transactionId) => {
  const { data } = await instance.delete(`/api/transactions/${transactionId}`);
  return data;
};

//Kategoriye göre işlem getir
export const getTransactionsByCategory = async (category) => {
  const { data } = await instance.get(`/api/transactions?category=${category}`);
  return data;
};
