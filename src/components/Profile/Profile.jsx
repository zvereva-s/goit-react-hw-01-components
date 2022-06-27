import PropTypes from 'prop-types';
import styles from './profile.module.css';


export default function Profile({ username, tag, location, avatar, stats }) {
    const { followers, views, likes } = stats;
    return (<div className={styles.profile}>
    <div className={styles.description}>
        <img
                src={avatar}
                alt={username}
                className={styles.avatar}
                width={150}
                height={150} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
    </div>
    <ul className={styles.stats}>
        <li className={styles.item}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.item}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.item}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{likes}</span>
        </li>
    </ul>
</div>)
}

Profile.propTypes = {
    avatar:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    stats:PropTypes.arrayOf(
      PropTypes.shape({
         followers:PropTypes.number,
         views:PropTypes.number,
         likes:PropTypes.number,
      })
};

