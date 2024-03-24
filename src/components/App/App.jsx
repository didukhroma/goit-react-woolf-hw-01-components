import { Container } from 'components/Container/Container';
import { Profile } from 'components/Profile/Profile';
import user from 'data/user.json';

// import Profile from '../Profile/index';

export const App = () => {
  return (
    <>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
    </>
  );
};
