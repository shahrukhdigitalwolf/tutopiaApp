import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.BASE_URL || 'https://dwecommapi.tutopiacrm.in/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request and response interceptors if needed
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if required
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;