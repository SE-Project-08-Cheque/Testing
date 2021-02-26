import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Center,
  Button,
  Flex,
  Image,
} from '@chakra-ui/react';
import '../components/MainSection.css';
import WelcomeNavbar from '../components/WelcomeNavbar';
import { MdAddShoppingCart, MdBuild, MdCall, MdSend } from 'react-icons/md';
import WelcomeFooter from '../components/WelcomeFooter';
import WelcomeCard from '../components/WelcomeCard';

function Welcome() {
  return (
    <>
      <WelcomeNavbar heading="Online Cheque" />

      <div className="welcome">
        <WelcomeCard imageUrl="./images/svg-2.svg" imageAlt="User" count="" />
      </div>
      <WelcomeFooter />
    </>
  );
}

export default Welcome;
