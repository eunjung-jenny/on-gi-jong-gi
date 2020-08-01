import React, { useEffect, useCallback } from 'react';
import CreateItem from '../../components/create/CreateItem';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize, createItem } from '../../modules/create';
import { withRouter } from 'react-router-dom';

const CreateItemContainer = ({ history }) => {
  const dispatch = useDispatch();
  const {
    name,
    category,
    price,
    volume,
    donationRatio,
    image,
    item,
    itemError,
  } = useSelector(({ create }) => ({
    name: create.name,
    category: create.category,
    price: create.price,
    volume: create.volume,
    donationRatio: create.donationRatio,
    image: create.image,
    item: create.item,
    itemError: create.itemError,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );
  const onPublish = () => {
    if ([name, category, price, volume, donationRatio, image].includes('')) {
      alert('빈칸을 채워주세요');
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('volume', volume);
    formData.append('donationRatio', donationRatio);
    formData.append('image', image);
    dispatch(createItem(formData));
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (item) {
      history.push('/item');
    }
    if (itemError) {
      console.log(itemError);
    }
    return () => {
      dispatch(initialize());
    };
  }, [dispatch, history, item, itemError]);

  return (
    <CreateItem
      onChangeField={onChangeField}
      onPublish={onPublish}
      onCancel={onCancel}
      name={name}
      category={category}
      price={price}
      volume={volume}
      donationRatio={donationRatio}
      image={image}
    />
  );
};

export default withRouter(CreateItemContainer);
