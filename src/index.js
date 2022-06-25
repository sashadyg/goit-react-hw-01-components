import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfileList from 'components/Profile/ProfileList';
import user from './components/Profile/user';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProfileList user={user} />
  </React.StrictMode>
);
