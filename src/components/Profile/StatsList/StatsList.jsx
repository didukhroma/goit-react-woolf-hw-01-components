import StatsListItem from '../StatsListItem';

import styles from './StatsList.module.css';

function StatsList({ stats }) {
  const keys = Object.keys(stats);
  console.log('keys', keys);
  return (
    <ul className={styles.stats}>
      {keys.map(name => (
        <StatsListItem
          key={name}
          name={name}
          quantity={stats[name]}
        ></StatsListItem>
      ))}
    </ul>
  );
}

export default StatsList;
