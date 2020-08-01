import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DonationList from '../../components/donations/DonationList';
import { listDonations } from '../../modules/donations';

const DonationListContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { donations, error, loading, id, userType } = useSelector(
    ({ donations, loading, user }) => ({
      donations: donations.donations,
      error: donations.error,
      loading: loading['donations/LIST_DONATIONS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    dispatch(listDonations({ id, userType }));
  }, [dispatch, id, userType]);
  return <DonationList loading={loading} error={error} donations={donations} />;
};

export default withRouter(DonationListContainer);
