import React from 'react';
import {
  GridItem,Image,Box,Text,Link,Grid,Center,Button,FormControl,Input,InputRightElement,InputGroup,InputLeftElement,Stack,Checkbox,ReactRouterLink,
} from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/react";

import {LockIcon } from '@chakra-ui/icons';

import ChangeDetails from '../components/StaffPagePics/Change.jpg';
import StaffHeader from '../components/StaffHeader';
import StaffsideBar from '../components/StaffsideBar';



function StaffDetailChange() {
    const [hasError, setHasError] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [isLargerThanPhone] = useMediaQuery("(min-width: 800px)")
  

  return (
    <React.Fragment>
        <StaffHeader/>
        <StaffsideBar/>

        <Box height="100%" bg="#F7FAFC">

        <Box
          mt={{ base: '15px', md: '125px' }}
          ml={{ base: '180px', md: '320px' }}
          pt="150px"
          h="700px"
          mr="10px"
        >
            <Center pb="10px">
                    <Text fontSize="2rem">Edit Profile !!</Text>
                </Center>

            <Grid
                h="600px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(6, 1fr)"
                gap={2}
                >

                {isLargerThanPhone ? 
                <GridItem rowSpan={2} colSpan={2} >
            
                    <Center>
                     <Image
                        height="550px"
                        borderRadius="10px"
                        ml="0px"
                        objectFit="cover"
                        src={ChangeDetails}
                        alt="Staff"
                    />
                    </Center>

                    
                </GridItem> :null}
                
                <GridItem  rowSpan={2} colSpan={4}  >

                

                    <form action="" >
                            <Stack spacing={3}>
                            <FormControl isRequired width="60%">
                                <InputGroup>
                                

                                <Input
                                    type="text"
                                    placeholder="Name"
                                    aria-label="name"
                                    errorBorderColor="crimson"
                                />
                                </InputGroup>
                            </FormControl>

                            <FormControl isRequired width="60%">
                                <InputGroup>
                               

                                <Input
                                    type="number"
                                    placeholder="Phone Number"
                                    aria-label="phoneNumber"
                                    errorBorderColor="crimson"
                                />
                                </InputGroup>

                                <InputGroup>
                               

                               <Input
                                   type="emailr"
                                   placeholder="Email"
                                   aria-label="Email Address"
                                   errorBorderColor="crimson"
                               />
                               </InputGroup>
                            </FormControl >

                            <FormControl isRequired width="60%">
                                <InputGroup>
                                

                                <Input
                                    type="text"
                                    placeholder="Address"
                                    aria-label="address"
                                    errorBorderColor="crimson"
                                />
                                </InputGroup>
                            </FormControl>

                            <FormControl isRequired pb="70px" width="60%">
                                <InputGroup>
                                <InputLeftElement children={<LockIcon />} />
                                <Input
                                    isInvalid
                                    type={show ? 'text' : 'password'}
                                    placeholder="Current Password"
                                    aria-label="Password"
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                    h="1.75rem"
                                    size="sm"
                                    onClick={() => setShow(!show)}
                                    >
                                    {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Checkbox pt='0px' isRequired>Confirm
                            </Checkbox>
                            <h2>Confirm </h2>
                            
                            <Link as={ReactRouterLink} to="/changePassword">
                               
                                <Button
                                marginLeft="110px"
                                w="40%"
                                boxShadow="dark-lg"
                                colorScheme="green"
                                type="submit"
                                onClick={() => setHasError(!hasError)}
                                >
                                Update
                                </Button>
                               
                            </Link>
                            </Stack>
                        </form>


                </GridItem>

                </Grid>
          
        
        </Box>

        </Box>
       
      
    </React.Fragment>
  );
}

export default  StaffDetailChange;
