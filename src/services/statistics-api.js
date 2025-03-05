import { instance } from './auth-api';

// Belirli bir dönem için işlem istatistiklerini getir
export const getTransactionSummary = async (params) => {
  const { data } = await instance.get('/api/transactions-summary', { params });
  return data;
};

// Kategorileri getir
export const getCategories = async () => {
  const { data } = await instance.get('/api/categories');
  return data;
};
