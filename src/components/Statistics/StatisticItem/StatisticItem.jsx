import PropTypes from 'prop-types';
import styles from './statisticItem.module.css';

function StatisticItem({ label, percentage }) {
  return (
    <li
      className={styles.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export default StatisticItem;


