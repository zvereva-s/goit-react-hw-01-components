import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import styles from './friendList.module.css';

function FriendList({ friends }) {
  const items = friends.map(({ id, avatar, name, isOnline }) => <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>)

  return (
    <ul className={styles.friendList}>
      {items}
    </ul>
  );
}

FriendList.defaultProps = {
  friends: [],
}

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
export default FriendList;
