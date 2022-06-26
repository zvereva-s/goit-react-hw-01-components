import Section from 'components/Section';

import Profile from 'components/Profile';
import userData from './data/user.json';

import FriendList from 'components/FriendList';
import friends from './data/friends.json';

import Statistics from 'components/Statistics';
import data from './data/data.json';

import TransactionHistory from 'components/TransactionHistory';
import transactions from './data/transactions.json';


export default function App() {
  return (
    <div className='container'>
      <Section title="Profile" subtitle="Task №1" >
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </Section>

      <Section title="Statistics" subtitle="Task №2" >
        <Statistics  title="Upload stats" stats={data} />
      </Section>
      
      <Section title="Friends List" subtitle="Task №3"  >
        <FriendList friends={friends} />
      </Section>

      <Section title="Transaction History" subtitle="Task №4" >
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}

