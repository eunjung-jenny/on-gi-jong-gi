import client from './client';

export const readDonator = (id) => client.get(`/api/donators/${id}`);

export const listDonators = ({ id, userType }) => {
  if (userType === 'institution') {
    return client.get(`/api/donators?${id}`);
  }
};
