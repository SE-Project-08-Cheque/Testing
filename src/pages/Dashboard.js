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
  AlertDialog,
  Stack,
  Checkbox,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Spinner,
  Tooltip,
} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Alert from '../components/Alert';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  EmailIcon,
  PhoneIcon,
  StarIcon,
} from '@chakra-ui/icons';
import '../components/MainSection.css';
import Footer from '../components/Footer';
import SessionService from '../Services/SessionService';
import { Redirect } from 'react-router-dom';

function Dashboard(props) {
  const islogged=SessionService.isAuthenticated();
  console.log(islogged);

  if(!islogged){
    return (
      <Redirect
                to={{ pathname: '/', state: { from: props.location } }}
            />
    );
  }
  var data=SessionService.getdata();
  console.log("1423");
  var user=JSON.parse(data);
  console.log(user);
  return (
    <>
      <div className="dashboard">
        <Sidebar disable={[false, true]}/>

        <Box
          borderStyle="solid"
          borderColor="gray.800"
          mt={{ base: '400px', md: '10px' }}
          ml={{ base: '20px', md: '320px' }}
          pt="150px"
          h="700px"
          mr="20px"
          left="0px"
          backgroundColor="red"
        >
          <Box
            borderStyle="solid"
            borderColor="gray.200"
            borderWidth="2px"
            p="10px"
            pt='30px'
            mt="-20px"
            borderRadius="20px"
          >
            <Center>
              <Grid templateColumns="repeat(3, 1fr)" gap={20}>
                
              </Grid>
            </Center>
            <Center mt='30px'>
            </Center>
            <Box
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              h="70px"
              m="10px"
              mt="50px"
              borderRadius="10px"
            >
              <Tooltip fontSize="md">
                <Text pl="2px" color="gray.900" isTruncated>
                  <IconButton
                    m="10px"
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Send email"
                    icon={<ArrowRightIcon />}
                  />
                  User Type : {user.user_type}                </Text>
              </Tooltip>
            </Box>
            <Box
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              h="70px"
              m="10px"
              borderRadius="10px"
            >
              <Tooltip  fontSize="md">
                <Text pl="2px" color="gray.900" isTruncated>
                  <IconButton
                    m="10px"
                    colorScheme="green"
                    aria-label="Call"
                    icon={<PhoneIcon />}
                  />
                  User ID : {user.user_id}
                </Text>
              </Tooltip>
            </Box>

            <Box
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              h="70px"
              m="10px"
              borderRadius="10px"
            >
              <Tooltip  fontSize="md">
                <Text pl="2px" color="gray.700" isTruncated>
                  <IconButton
                    m="10px"
                    colorScheme="red"
                    aria-label="Send email"
                    icon={<CheckCircleIcon/>}
                  />
                  User Name : {user.username}
                </Text>
              </Tooltip>
            </Box>

            <Box
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              h="70px"
              m="10px"
              borderRadius="10px"
            >
              <Tooltip  fontSize="md">
                <Text pl="2px" color="gray.700" isTruncated>
                  <IconButton
                    m="10px"
                    colorScheme="blue"
                    aria-label="Send email"
                    icon={<EmailIcon />}
                  />
                  User Account : {user.account_no}
                </Text>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Dashboard;
