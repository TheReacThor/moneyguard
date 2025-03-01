import axios from 'axios';

// API'nin base URL'ini tanımla
const BASE_URL = 'https://wallet.goit.ua'; // Bu URL örnek olarak verilmiştir, gerçek URL'i kullanın

// Axios instance'ını oluştur
export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Token'ı localStorage'dan alıp Authorization header'ına ekleyen interceptor
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Refresh token işlemi için interceptor (isteğe bağlı)
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Refresh token işlemi burada yapılabilir
        // const refreshToken = localStorage.getItem('refreshToken');
        // const response = await axios.post(`${BASE_URL}/api/auth/refresh`, { refreshToken });
        // const { token } = response.data;
        // localStorage.setItem('token', token);
        // originalRequest.headers.Authorization = `Bearer ${token}`;
        // return instance(originalRequest);
      } catch (error) {
        // Refresh token işlemi başarısız olursa, kullanıcıyı logout yapabilirsiniz
        // localStorage.removeItem('token');
        // localStorage.removeItem('refreshToken');
        // window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// Auth API fonksiyonları burada tanımlanabilir
export const register = async (userData) => {
  const { data } = await instance.post('/api/auth/sign-up', userData);
  return data;
};

export const login = async (userData) => {
  const { data } = await instance.post('/api/auth/sign-in', userData);
  return data;
};

export const logout = async () => {
  const { data } = await instance.post('/api/auth/sign-out');
  return data;
};

export const refreshUser = async () => {
  const { data } = await instance.get('/api/users/current');
  return data;
};
