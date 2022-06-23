import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';

function TransactionHistory({ data }) {
  const items = data.map(el => (<tr key={el.id}>
    <th className={styles.type}>{el.type}</th>
    <th className={styles.amount}>{el.amount}</th>
    <th className={styles.currency}>{el.currency}</th>
  </tr>));

  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.headers}>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.number,
};

export default TransactionHistory;
