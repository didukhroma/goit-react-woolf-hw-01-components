import styles from './StatisticsItem.module.css';

function StatisticsItem({ label, percentage, bgColor }) {
  return (
    <li className={styles.item} style={{ backgroundColor: bgColor }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}&#x25;</span>
    </li>
  );
}

export default StatisticsItem;
