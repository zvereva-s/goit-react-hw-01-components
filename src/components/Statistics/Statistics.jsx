import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import styles from './statistic.module.css';


function Statistics({ title, stats }) {
  const items = stats.map(item => <StatisticItem key={item.id} label={item.label} percentage={item.percentage} />)

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {items}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  stats: [],
}

Statistics.prototype = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};



export default Statistics;
