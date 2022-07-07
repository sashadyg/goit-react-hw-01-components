import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfileList from 'components/Profile/ProfileList';
import Statistics from './components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import friends from './components/FriendList/friends';
import user from './components/Profile/user';
import data from './components/Statistics/data';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProfileList user={user} />
    <Statistics title="Upload stats" stats={data} />;
    <Statistics stats={data} />;
    <FriendList friends={friends} />
  </React.StrictMode>
);
