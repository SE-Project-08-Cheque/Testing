import React from 'react';
import {Box,Grid,Center,Button,FormControl,Input,FormHelperText, Divider,InputRightElement,InputGroup,InputLeftElement,Stack,Checkbox,Image,Text,GridItem
} from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';
import { useMediaQuery } from "@chakra-ui/react";


import PassChange from '../components/StaffPagePics/passchange.jpg';
import StaffHeader from '../components/StaffHeader';
import StaffsideBar from '../components/StaffsideBar';



function ChangeStaffPassword() {
    const [hasError, setHasError] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [isLargerThanPhone] = useMediaQuery("(min-width: 800px)")
  
  
    return (
    <React.Fragment>
        <StaffHeader/>
        <StaffsideBar/>

        <Box height="100%" width="auto">

        <Box
          mt={{ base: '15px', md: '50px' }}
          ml={{ base: '115px', md: '500px' }}
          pt="150px"
          h="600px"
          mr="0px"
        >
           
            <Grid
                h="600px"
                width="100%"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(6, 1fr)"
                gap={2}
                >
                
            
                {isLargerThanPhone ? 
                <GridItem rowSpan={2} colSpan={2} >
                                <Center>
                                <Image
                                    height="560px"
                                    borderRadius="10px"
                                    ml="2px"
                                    objectFit="cover"
                                    src={PassChange}
                                    alt="Staff"
                                />
                                </Center>
                                </GridItem> :null}

                    
             
                
                <GridItem  rowSpan={2} colSpan={4}  >

                
                   
                        <Text fontSize="1.5rem" marginLeft="100px" marginBottom="25px" color="tomato">Change  Password!</Text>
                   


                <form action="submit">
                    <Stack spacing={4}>
                    <FormControl isRequired width="420px">
                        <InputGroup>
                      
                        <Input
                            type="text"
                            placeholder="Staff ID"
                            aria-label="staffid"
                            isInvalid
                            errorBorderColor="crimson"
                        />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired width="420px">
                        <InputGroup>
                        <InputLeftElement children={<LockIcon />} />
                        <Input
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
                    <FormControl isRequired width="420px">
                        <InputGroup>
                        <InputLeftElement children={<LockIcon />} />
                        <Input
                            type={show ? 'text' : 'password'}
                            placeholder="New Password"
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
                        <FormHelperText>
                        Password Must be 8-15 characters long
                        </FormHelperText>
                    </FormControl>

                    <FormControl isRequired width="420px">
                        <InputGroup>
                        <InputLeftElement children={<LockIcon />} />
                        <Input
                            type={show ? 'text' : 'password'}
                            placeholder="Re-Enter NewPassword"
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
                        <FormHelperText>
                        Re-Enter 
                        </FormHelperText>
                        
                    </FormControl>
                    <Checkbox pt='70px' pb='30px' isRequired>Confirm</Checkbox>
                  
                    </Stack>

                    <Button
                    ml="100px"
                    mt='2px'
                    width="255px"
                        colorScheme="green"
                        type="submit"
                        onClick={() => setHasError(!hasError)}
                    >
                        Change
                    </Button>
                    </form>


                </GridItem>

                </Grid>
          
        
        </Box>

        </Box>
       
       
       
    </React.Fragment>
  );
}

export default  ChangeStaffPassword;
