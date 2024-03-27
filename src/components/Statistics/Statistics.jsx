import { getRandomHexColor } from 'helper/randomColor';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">Upload stats</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className={styles.item}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}&#x25;</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Statistics;
