import client from './client';

export const writeDonation = ({ item, title, targetQuantity, expiresAt }) => {
  const formData = new FormData();
  formData.append('item', item);
  formData.append('title', title);
  formData.append('targetQuantity', targetQuantity);
  formData.append('expiresAt', expiresAt);
  client.post('/api/donations', formData);
};

export const readDonation = (id) => client.get(`/api/donations/${id}`);

export const listDonations = ({ id, userType }) => {
  if (userType === 'company') {
    return client.get(`/api/donations/company?${id}`);
  }
  if (userType === 'institution') {
    return client.get(`/api/donations/institution?${id}`);
  }
};
