import React from 'react';
import {
  GridItem,Box,Text,Grid,Center,Button,Flex,Image,IconButton,Tooltip,
} from '@chakra-ui/react';

import {
    InfoOutlineIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  EmailIcon,
  PhoneIcon,
} from '@chakra-ui/icons';

import StaffImg from '../components/StaffPagePics/pro.jpg';
import StaffHeader from '../components/StaffHeader';
import StaffsideBar from '../components/StaffsideBar';

function Dashboard() {
    const Staff={  // sample Staff
       
        name: 'Aires',
        Email:'olpai.com',
        phone: '0774524255',
        Address:'thimpili theru'
      }

  return (
    <React.Fragment>
        <StaffHeader/>
        <StaffsideBar/>

        <Box height="100%" bg="#F7FAFC">

        <Box
          mt={{ base: '15px', md: '125px' }}
          ml={{ base: '20px', md: '320px' }}
          marginBottom="0"
          pt="150px"
          height="100%"
          mr="10px"
        >

            <Grid
                h="600px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(6, 1fr)"
                gap={2}
                >
                <GridItem rowSpan={2} colSpan={2} >
                    <Center>
                     <Image
                        height="100%"
                        borderRadius="10px"
                        ml="0px"
                        objectFit="cover"
                        src={StaffImg}
                        alt="Staff"
                    />
                    </Center>

                    
                </GridItem>
                
                <GridItem  rowSpan={2} colSpan={4}  >

                <Box
                    borderStyle="solid"
                    borderColor="#3182CE"
                    borderWidth="1px"
                    h="70px"
                    w="50%"
                    m="10px"
                    mt="50px"
                    borderRadius="10px"
                >
              <Tooltip label="Name" fontSize="md">
                <Text pl="2px" color="gray.900" isTruncated>
                  <IconButton
                    m="10px"
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Send email"
                    icon={< InfoOutlineIcon/>}
                  />
                  {Staff.name}
                </Text>
              </Tooltip>
            </Box>
            <Box
              borderStyle="solid"
              borderColor="#3182CE"
              borderWidth="1px"
              h="70px"
              m="10px"
              w="50%"
              borderRadius="10px"
            >
              <Tooltip label="Phone number" fontSize="md">
                <Text pl="2px" color="gray.900" isTruncated>
                  <IconButton
                    m="10px"
                    colorScheme="green"
                    aria-label="Call"
                    icon={<PhoneIcon />}
                  />
                    {Staff.phone}
                </Text>
              </Tooltip>
            </Box>

            <Box
              borderStyle="solid"
              borderColor="#3182CE"
              borderWidth="1px"
              h="70px"
              w="50%"
              m="10px"
              borderRadius="10px"
            >
              <Tooltip label="E-Mail" fontSize="md">
                <Text pl="2px" color="gray.700" isTruncated>
                  <IconButton
                    m="10px"
                    colorScheme="blue"
                    aria-label="Send email"
                    icon={<EmailIcon />}
                  />
                  {Staff.Email}
                </Text>
              </Tooltip>
            </Box>

            <Box
              borderStyle="solid"
              borderColor="#3182CE"
              borderWidth="1px"
              h="70px"
              m="10px"
              w="50%"
              borderRadius="10px"
            >
              <Tooltip label="Address" fontSize="md">
                <Text pl="2px" color="gray.700" isTruncated>
                  <IconButton
                    m="10px"
                    colorScheme="red"
                    aria-label="Send email"
                    icon={<CheckCircleIcon />}
                  />
                  {Staff.Address}
                </Text>
              </Tooltip>
            </Box>


                </GridItem>

                </Grid>
          
        
        </Box>

        </Box>
       
      
    </React.Fragment>
  );
}

export default Dashboard;
