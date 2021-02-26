import React from 'react';
import ForgotPassword from '../components/ForgotPassword';
import WelcomeNavbar from '../components/WelcomeNavbar';
import WelcomeFooter from '../components/WelcomeFooter';


function forgotPass() {
  return (
    <>
    <WelcomeNavbar heading="Online Cheque" />
      <ForgotPassword/>
      <WelcomeFooter />
    </>
  );
}

export default forgotPass;
