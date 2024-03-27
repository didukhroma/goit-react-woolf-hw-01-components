import styles from './Profile.module.css';
import StatsList from './StatsList';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>&#64;{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <StatsList stats={stats} />
    </div>
  );
};

export default Profile;
