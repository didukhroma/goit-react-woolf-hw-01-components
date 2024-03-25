import styles from './TransactionOperation.module.css';

function TransactionOperation({ type, amount, currency }) {
  return (
    <tr className={styles.tr}>
      <td className={styles.type}>{type}</td>
      <td className={styles.amount}>{amount}</td>
      <td className={styles.currency}>{currency}</td>
    </tr>
  );
}

export default TransactionOperation;
