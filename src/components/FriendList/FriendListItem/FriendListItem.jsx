import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={styles.status} style={{backgroundColor: isOnline ? '#80ff00' : 'red'}}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
    avatar:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};


export default FriendListItem;
