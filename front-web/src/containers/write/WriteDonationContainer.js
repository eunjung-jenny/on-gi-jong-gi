import React, { useEffect, useCallback } from 'react';
import WriteDonation from '../../components/write/WriteDonation';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize, writeDonation } from '../../modules/write';
import { withRouter } from 'react-router-dom';
import { readItem, unloadItem } from '../../modules/item';

const WriteDonationContainer = ({ match, history }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { item } = useSelector(({ item }) => ({
    item: item.item,
  }));
  const {
    title,
    targetQuantity,
    expiresAt,
    donation,
    donationError,
  } = useSelector(({ create }) => ({
    title: create.title,
    targetQuantity: create.targetQuantity,
    expiresAt: create.expiresAt,
    donation: create.donation,
    donationError: create.donationError,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );
  const onPublish = () => {
    if ([title, targetQuantity, expiresAt].includes('')) {
      alert('빈칸을 채워주세요');
      return;
    }
    dispatch(writeDonation({ item, title, targetQuantity, expiresAt }));
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (donation) {
      history.push('/donation');
    }
    if (donationError) {
      console.log(donationError);
    }
    dispatch(readItem(id));
    return () => {
      dispatch(unloadItem());
      dispatch(initialize());
    };
  }, [dispatch, history, donation, donationError, id]);

  return (
    <WriteDonation
      onChangeField={onChangeField}
      onPublish={onPublish}
      onCancel={onCancel}
      item={item}
      title={title}
      targetQuantity={targetQuantity}
      expiresAt={expiresAt}
    />
  );
};

export default withRouter(WriteDonationContainer);
