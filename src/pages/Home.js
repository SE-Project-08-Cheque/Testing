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
import { MdAddShoppingCart, MdBuild, MdCall, MdSend } from 'react-icons/md';
import Card from '../components/Card';
import SessionService from '../Services/SessionService';
import { Redirect } from 'react-router-dom';


function Home(props) {
  const islogged=SessionService.isAuthenticated();
  console.log(islogged);

  // if(!islogged){
  //   return (
  //     <Redirect
  //               to={{ pathname: '/', state: { from: props.location } }}
  //           />
  //   );
  // }
  return (
    <>
      <div className="main-section">
        <Box pt="150px" h="300px">
          <Center>
            <Text data-testid="welcome" pl="20px" fontSize="9xl" color="white">
              Welcome!
            </Text>
          </Center>
          <Center>
            <Text data-testid="send" pt="30px" fontSize="5xl" color="white">
              Send a cheque?
            </Text>
          </Center>
          <Center>
            <Button
              mt="20px"
              rightIcon={<MdSend />}
              colorScheme="red"
              variant="solid"
              data-testid="button"
              // onClick={()=> props.history.push("/chequebuilder")}
            >
              Click Here!
            </Button>
          </Center>
        </Box>
      </div>

      <div className="buttons" p="10px">
      <Card
          imageUrl="./images/svg-3.svg"
          imageAlt="User"
          type="My Home"
          link="/home"
        />
        <Card
          imageUrl="./images/svg-1.svg"
          imageAlt="User"
          type="Received Cheques"
          link="/getpaid"
        />
        <Card
          imageUrl="./images/svg-5.svg"
          imageAlt="User"
          type="Issue Cheques"
          link="/chequebuilder"
        />
        <Card
          imageUrl="./images/svg-2.svg"
          imageAlt="User"
          type="Sent Cheques"
          link="/chequelist"
        />
        
      </div>
    </>
  );
}

export default Home;
