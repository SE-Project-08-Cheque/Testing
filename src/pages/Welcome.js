import React from 'react';
import {
  Box,
  Image,
  Badge,
  Grid,
  GridItem,
  Center,
  Button,
  Heading,
} from '@chakra-ui/react';
import '../components/MainSection.css';
import { MdAccountCircle, MdSend } from 'react-icons/md';
import SessionService from '../Services/SessionService';
import WelcomeFooter from '../components/WelcomeFooter';
import { ArrowForwardIcon } from '@chakra-ui/icons';
<link
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  rel="stylesheet"
></link>

function Welcome(props) {

  const islogged = SessionService.isAuthenticated();
  console.log(islogged);

  if (!islogged) {
    return (
      <>
        
        <div className="welcome">
        <Box
          width="auto"
          overflow="hidden"
          p="10px"
          mb="10px"
          ml="20px"
          mr="20px"
          mt="-120px"
        >
          <Grid
            h="auto"
            templateColumns="repeat(8, 1fr)"
            templateRows="repeat(3, 1fr)"
            gap={4}
          >
            <GridItem
              colSpan={{ base: 8, md: 2 }}
              rowSpan={{ base: 3, md: 3 }}
              pt="12px"
            ></GridItem>

            <GridItem colSpan={{ base: 8, md: 5 }} rowSpan={{ base: 1, md: 3 }}>
              <Box p="6">
                <Box mt="0" mb="5" fontWeight="semibold" as="h4" lineHeight="tight">
                  <Image
                    src="./images/svg-2.svg"
                    borderRadius="full"
                    boxSize="300px"
                  />

                  <Heading as="h5" size="3xl" color="white">
                    Login to start
                </Heading>
                </Box>

                <Box d="flex" mt="2" alignItems="center">
                  <Box as="span" ml="2" color="white" fontSize="sm">
                    You can now send and receive checks easily
                </Box>
                </Box>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="teal"
                  variant="solid"
                  size="lg"
                  mt="30px"
                  rightIcon={<MdAccountCircle />}
                  onClick={() => props.history.push("/signin")}
                >
                  Login
                </Button>
              </Box>
            </GridItem>
            <GridItem
              colSpan={{ base: 8, md: 1 }}
              rowSpan={{ base: 1, md: 3 }}
              pt="50px"
            ></GridItem>
          </Grid>

        </Box>
        </div>
        <WelcomeFooter />
      </>
    );

  } else {
    return (
      <>
        
        <div className="welcome">
        <Box
          width="auto"
          overflow="hidden"
          p="10px"
          mb="10px"
          ml="20px"
          mr="20px"
          mt="-120px"
        >
          <Grid
            h="auto"
            templateColumns="repeat(8, 1fr)"
            templateRows="repeat(3, 1fr)"
            gap={4}
          >
            <GridItem
              colSpan={{ base: 8, md: 2 }}
              rowSpan={{ base: 3, md: 3 }}
              pt="12px"
            ></GridItem>

            <GridItem colSpan={{ base: 8, md: 5 }} rowSpan={{ base: 1, md: 3 }}>
              <Box p="6">
                <Box mt="0" mb="5" fontWeight="semibold" as="h4" lineHeight="tight">
                  <Image
                    src="./images/svg-2.svg"
                    borderRadius="full"
                    boxSize="300px"
                  />

                  <Heading as="h5" size="3xl" color="white">
                    Login to start
                </Heading>
                </Box>

                <Box d="flex" mt="2" alignItems="center">
                  <Box as="span" ml="2" color="white" fontSize="sm">
                    You can now send and receive checks easily
                </Box>
                </Box>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="teal"
                  variant="solid"
                  size="lg"
                  mt="30px"
                  rightIcon={<MdAccountCircle />}
                  onClick={() => {
                    if (JSON.parse(SessionService.getdata()).user_type === "CUSTOMER") { props.history.push("/dashboard") }
                    else { props.history.push("/Staff_Dashboard") }

                  }
                  }
                >
                  Dashboard
                </Button>
              </Box>
            </GridItem>
            <GridItem
              colSpan={{ base: 8, md: 1 }}
              rowSpan={{ base: 1, md: 3 }}
              pt="50px"
            ></GridItem>
          </Grid>

        </Box>
        </div>
        <WelcomeFooter />
      </>

    );

  }
}

export default Welcome;
