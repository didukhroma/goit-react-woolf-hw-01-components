import Container from 'components/Container';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';

import user from 'data/user.json';
import data from 'data/data.json';

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
        {/* Statistics task 3 */}
        {/* Statistics task 4 */}
      </Container>
    </>
  );
};
export default App;
