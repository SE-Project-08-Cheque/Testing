import React from 'react';
import {Box,Center,Text} from '@chakra-ui/react';

import PinChangeRequestList from '../components/PinChange/RequestList';
import StaffHeader from '../components/StaffHeader';
import StaffSideBar from '../components/StaffsideBar';

const PinChangeRequests = () => {
  const Requests = [           //sample pinchange requests
    {
      request_id: 'u1',
      customername: 'Koddayar ',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      reason: "Forgot"
    },

    {
      request_id: 'u1',
      customername: 'Sunniyar',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      reason: "Like to Change"
    },
    {
      request_id: 'u1',
      customername: 'Max Schwarz',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      reason: "For Fun"
    },
    {
      request_id: 'u1',
      customername: 'Max Schwarz',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      reason: "what s ur problem "
    },
        //sample PinChange Requests
        
        {
          request_id: 'u1',
          customername: 'Max Schwarz',
          image:
            'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          reason: "what s ur problem "
        },

  
  ];





  return (
    <React.Fragment>

      <StaffHeader/>
      <StaffSideBar/>

      
      <Box
                borderStyle="solid"
                borderColor="gray.200"
                padding='0px'
                bgColor="gray.100"
                boarderRadius="250px"
                mt={{ base: '100px', md: '130px' }}
                ml={{ base: '150px', md: '2px' }}
                mr={{base:"150px",md:'20px'}}
                

                h="auto"
               
                >

              <Center>
                <Text fontSize="2.5rem" > Pin Change Requests</Text>
              </Center>

  
       < PinChangeRequestList items={Requests} />

    </Box>

   
  
   </React.Fragment>
  
  
  )
};

export default PinChangeRequests;
