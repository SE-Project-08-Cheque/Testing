import React from 'react';
import WelcomeNavbar from '../components/WelcomeNavbar';
import WelcomeFooter from '../components/WelcomeFooter';
import NewPass from '../components/NewPass';


function EnterNewPassword() {
  return (
    <>
    <WelcomeNavbar heading="Online Cheque" />
      <NewPass/>
      <WelcomeFooter />
    </>
  );
}

export default EnterNewPassword;