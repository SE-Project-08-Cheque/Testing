import React from 'react';
import WelcomeNavbar from '../components/WelcomeNavbar';
import WelcomeFooter from '../components/WelcomeFooter';
import EnterPin from '../components/EnterPin';


function forgotPass() {
  return (
    <>
    <WelcomeNavbar heading="Online Cheque" />
      <EnterPin/>
      <WelcomeFooter />
    </>
  );
}

export default forgotPass;