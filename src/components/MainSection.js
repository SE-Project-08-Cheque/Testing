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
import './MainSection.css';
import { MdAddShoppingCart, MdBuild, MdCall, MdSend } from 'react-icons/md';
import Card from './Card';
import SessionService from '../Services/SessionService';
import { Redirect } from 'react-router-dom';

function MainSection(props) {
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
            <Text data-testid='welcome' pl="20px" fontSize="9xl" color="white">
              Welcome!
            </Text>
          </Center>
          <Center>
            <Text data-testid='send_cheque' pt="30px" fontSize="5xl" color="white">
              Send a cheque?
            </Text>
          </Center>
          <Center>
            <Button
              mt="20px"
              data-testid='button'
              rightIcon={<MdSend />}
              colorScheme="red"
              variant="solid"
              // onClick={()=> props.history.push("/chequebuilder")}
            >
              Click Here!
            </Button>
          </Center>
        </Box>
      </div>

      <div data-testid='cards' className="buttons" p="10px">
        <Card
          imageUrl="./images/svg-1.svg"
          imageAlt="User"
          type="Received Cheques"
          count="34 received "
        />
        <Card
          imageUrl="./images/svg-5.svg"
          imageAlt="User"
          type="Sent Cheques"
          count="sent 12"
        />
        <Card
          imageUrl="./images/svg-2.svg"
          imageAlt="User"
          type="Finished Cheques"
          count="20 finished "
        />
      </div>
    </>
  );
}

export default MainSection;
