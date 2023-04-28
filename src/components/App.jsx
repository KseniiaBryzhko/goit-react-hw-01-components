import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import user from '../user.json';
import data from '../data.json';

export const App = () => {
  return (
    <>
      <div>
        <Profile {...user} />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
    </>
  );
};
