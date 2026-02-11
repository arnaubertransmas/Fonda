import axios from 'axios';

export const setAuthToken = (token: string) => {
  localStorage.setItem('authToken', token);
};

export const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('authToken');
};

export const logout = () => {
  localStorage.removeItem('authToken');
  document.cookie = "admin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
};

export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};

export const getCookie = (name: string): string | null => {
  if (typeof window === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
};

// Interceptor per afegir token a les peticions
axios.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor per gestionar errors d'autenticació
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      // Token invàlid o expirat
      logout();
      if (typeof window !== 'undefined') {
        window.location.href = '/portal_wikilok';
      }
    }
    return Promise.reject(error);
  }
);

export default axios;