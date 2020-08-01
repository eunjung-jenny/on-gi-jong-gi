import client from './client';

export const addDonation = (formData) =>
  client.post('/api/donations', formData);

export const readDonation = (id) => client.get(`/api/donations/${id}`);

export const listDonations = ({ userId, userType }) => {
  if (userType === 'company') {
    return client.get(`/api/donations/company?${userId}`);
  }
  if (userType === 'institution') {
    return client.get(`/api/donations/institution?${userId}`);
  }
};
