import axios from 'axios';

const FRONTEND_IDENTIFIER = 'MyAppFrontend';

const dateInfo = new Date();
const timestamp = Date.parse(dateInfo.toUTCString());

const COMUNICATION_SECRET_KEY = process.env.NEXT_PUBLIC_COMUNICATION_SECRET_KEY;
const securityWord = COMUNICATION_SECRET_KEY + '$.$' + timestamp.toString();
const securityHash = Buffer.from(securityWord).toString('base64');

const api = axios.create({
  baseURL: 'http://localhost:3000'
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
