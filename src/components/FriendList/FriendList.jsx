import FriendListItem from './FriendListItem';

import styles from './FriendList.module.css';

function FriendList({ friends }) {
  console.log(friends);
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;
