import axios from 'axios';

const isServer = typeof window === 'undefined';

const baseURL = isServer
  ? 'http://backend:3000' // inside Docker network
  : process.env.NEXT_PUBLIC_API_URL; // http://localhost:3000

const FRONTEND_IDENTIFIER = 'MyAppFrontend';

const dateInfo = new Date();
const timestamp = Date.parse(dateInfo.toUTCString());

const COMUNICATION_SECRET_KEY = process.env.NEXT_PUBLIC_COMUNICATION_SECRET_KEY;
const securityWord = COMUNICATION_SECRET_KEY + '$.$' + timestamp.toString();
const securityHash = Buffer.from(securityWord).toString('base64');

const api = axios.create({
  baseURL
});

api.interceptors.request.use(
  (config) => {
    config.headers['x-api-key'] = securityHash;
    config.headers['Authorization'] = FRONTEND_IDENTIFIER;
    let token;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('authToken');
    }

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
