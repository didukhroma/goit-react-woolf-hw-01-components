import Container from 'components/Container';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';

const App = () => {
  return (
    <>
      <Container>
        {/* Profile task 1 */}
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        {/* Statistics task 2 */}
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        {/* FriendList task 3 */}
        <FriendList friends={friends} />
        {/* Statistics task 4 */}
      </Container>
    </>
  );
};
export default App;
