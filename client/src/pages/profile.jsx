import React from 'react';
import UserProfile from '../components/UserProfile';
import Header from '../components/bulma/Header';
import Section from '../components/bulma/Section';

const Profile = () => {
  return (
    <div>
      <Header title="Profile" />
      <Section>
        <UserProfile />
      </Section>
    </div>
  );
};

export default Profile;
