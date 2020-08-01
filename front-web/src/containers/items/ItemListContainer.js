import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from '../../components/items/ItemList';
import { listItems } from '../../modules/items';

const ItemListContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { items, error, loading, id, userType } = useSelector(
    ({ items, loading, user }) => ({
      items: items.items,
      error: items.error,
      loading: loading['items/LIST_ITEMS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    dispatch(listItems({ id, userType }));
  }, [dispatch, id, userType]);
  return <ItemList loading={loading} error={error} items={items} />;
};

export default withRouter(ItemListContainer);
