import React from 'react';
import { useSelector } from 'react-redux';
import { IconWithBadge } from './IconWithBadge';

const TabBadge = (props) => {
  const basketItems = useSelector((state) => state.basket.items);
  const badgeCount = basketItems.length;
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={badgeCount} />;
};
export default TabBadge;
