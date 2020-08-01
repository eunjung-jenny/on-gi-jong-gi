import client from './client';

export const login = ({ email, password }) =>
  client.post('/api/auth/login', { email, password });

export const signup = ({ email, userName, userType, password }) =>
  client.post('/api/auth/signup', { email, userName, userType, password });

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');
