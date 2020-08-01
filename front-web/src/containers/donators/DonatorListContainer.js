import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DonatorList from '../../components/donators/DonatorList';
import { listDonators } from '../../modules/donators';

const DonatorListContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { donators, error, loading, id, userType } = useSelector(
    ({ donators, loading, user }) => ({
      donators: donators.donators,
      error: donators.error,
      loading: loading['donators/LIST_DONATORS'],
      id: user.user.id,
      userType: user.user.userType,
    }),
  );
  useEffect(() => {
    dispatch(listDonators({ id, userType }));
  }, [dispatch, id, userType]);
  return <DonatorList loading={loading} error={error} donators={donators} />;
};

export default withRouter(DonatorListContainer);
