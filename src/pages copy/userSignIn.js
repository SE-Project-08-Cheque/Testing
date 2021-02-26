import React from 'react';
import SignIn from '../components/signin';
import WelcomeCard from '../components/WelcomeCard';
import WelcomeFooter from '../components/WelcomeFooter';
import WelcomeNavbar from '../components/WelcomeNavbar';

function userSignIn() {
  return (
    <>
      <WelcomeNavbar heading="Online Cheque" />
      <SignIn />
      <WelcomeFooter />
    </>
  );
}

export default userSignIn;
