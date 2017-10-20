import React from 'react';
import { store } from '../index.js';

const UserProfile = () => {
  return (
    <div>
      <h2 className="title is-2">{store.getState().session.currentUser}</h2>
    </div>
  );
};

export default UserProfile;
