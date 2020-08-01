import client from './client';

export const addItem = (formData) => client.post('/api/items', formData);

export const readItem = (id) => client.get(`/api/items/${id}`);

export const listItems = ({ userId, userType }) => {
  if (userType === 'company') {
    return client.get(`/api/items?${userId}`);
  }
  if (userType === 'institution') {
    return client.get('/api/items');
  }
};