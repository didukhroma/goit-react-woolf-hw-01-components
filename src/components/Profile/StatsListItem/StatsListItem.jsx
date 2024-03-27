import styles from './StatsListItem.module.css';

function StatsListItem({ name, quantity }) {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{name}</span>
      <span className={styles.quantity}>{quantity}</span>
    </li>
  );
}

export default StatsListItem;
