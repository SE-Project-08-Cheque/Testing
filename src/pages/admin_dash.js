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
import {  MdSend } from 'react-icons/md';
import Card from '../components/Card';
import SessionService from '../Services/SessionService';
import { Redirect } from 'react-router-dom';


function Admin_Dashboard(props) {
  const islogged=SessionService.isAuthenticated();
  console.log(islogged);

  if(!islogged){
    return (
      <Redirect
                to={{ pathname: '/', state: { from: props.location } }}
            />
    );
  }
  return (
    <>
      <div className="main-section">
        <Box pt="150px" h="300px">
          <Center>
            <Text pl="20px" fontSize="9xl" color="white">
              Welcome!
            </Text>
          </Center>
          <Center>
            <Text pt="30px" fontSize="5xl" color="white">
              Let Us Serve Customers
            </Text>
          </Center>
         
        </Box>
      </div>

      <div className="buttons" p="10px">
      <Card
          imageUrl="./images/svg-3.svg"
          imageAlt="Approve Memberships"
          type="Approve Memberships"
          link="/Approve"
        />
        <Card
          imageUrl="./images/svg-1.svg"
          imageAlt="Add New Staff"
          type="Add New Staff"
          link="/StaffReg"
        />
        <Card
          imageUrl="./images/svg-5.svg"
          imageAlt="My Notifications"
          type="My Notifications"
          link="/AllNotifications"
        />
        <Card
          imageUrl="./images/svg-1.svg"
          imageAlt="Evaluate Cheques"
          type="Evaluate Cheques"
          link="/eval"
        />
        <Card
          imageUrl="./images/svg-3.svg"
          imageAlt="All Customers"
          type="All Customers"
          link="/AllCustomers"
        />
        <Card
          imageUrl="./images/svg-2.svg"
          imageAlt="My Past Evaluations"
          type="My Past Evaluations"
          link="/evaledbyme"
        />
        
      </div>
    </>
  );
}

export default Admin_Dashboard;
