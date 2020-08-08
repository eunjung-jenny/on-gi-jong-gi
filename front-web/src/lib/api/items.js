import client from './client';

export const createItem = ({
  name,
  category,
  price,
  volume,
  donationRatio,
  image,
}) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('category', category);
  formData.append('price', price);
  formData.append('volume', volume);
  formData.append('donationRatio', donationRatio);
  formData.append('image', image);
  client.post('/api/items', formData);
};

export const readItem = (id) => client.get(`/api/items/${id}`);

export const listItems = ({ id, userType }) => {
  if (userType === 'company') {
    return client.get(`/api/items?${id}`);
  }
  if (userType === 'institution') {
    return client.get('/api/items');
  }
};
