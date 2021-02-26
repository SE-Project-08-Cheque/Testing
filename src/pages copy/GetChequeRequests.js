import React from 'react';
import {SimpleGrid,Box,Center,Text} from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/react"

import StaffHeader from "../components/StaffHeader";
import StaffsideBar from "../components/StaffsideBar";
import ChequeCard from '../components/GetChequeRequests/ChequeCard';



 const GetChequeRequests = () => {
    const [isLargerThanPhone] = useMediaQuery("(min-width: 800px)");

    const Cheques=[ // sample cheques Chequeid,senderid,receiverid,date,status,signature,amount
            {
                Chequeid:5,
                senderid:"pts",
                receiverid:"kaml",
                date:200,
                status:404,
                signature:"pts",
                ammount:5000,

            },
            {
                Chequeid:5,
                senderid:"pts",
                receiverid:"kaml",
                date:200,
                status:404,
                signature:"pts",
                ammount:5000,

            },
            {
                Chequeid:5,
                senderid:"pts",
                receiverid:"kaml",
                date:200,
                status:404,
                signature:"pts",
                ammount:5000,

            },
            {
                Chequeid:54,
                senderid:"pts",
                receiverid:"kaml",
                date:200,
                status:404,
                signature:"pts",
                ammount:5000,

            },
            {
                Chequeid:500,
                senderid:"pts",
                receiverid:"kaml",
                date:200,
                status:404,
                signature:"pts",
                ammount:5000,

            }
            

        ]

        


    return (
        <React.Fragment>
            <StaffHeader/>
            <StaffsideBar/>

            
            <Box
                paddingLeft="10px"
                boarderRadius="250px"
                mt={{ base: '100px', md: '130px' }}
                ml={{ base: '50px', md: '260px' }}
               
                

                h="auto"
                mr="20px"
                >
                    <Center>
                        <Text fontSize="2rem" mb="25px"> Cheques</Text>
                    </Center>


            {isLargerThanPhone ? 

                        <SimpleGrid columns={5} spacing={10}>
                            {Cheques.map(cheque => (

                                    <Box  height="200x"><ChequeCard    // sample cheques Chequeid,senderid,receiverid,date,status,signature,amount
                                    
                                     SName={cheque.senderid}
                                     RName={cheque.receiverid}
                                     Date={cheque.date}
                                     Chequeid={cheque.Chequeid}
                                     status={cheque.status}
                                     sig={cheque.signature}
                                     amount={cheque.amount}/>
                                      </Box>

                        ))}
                        
                        </SimpleGrid>
                               :
                               <SimpleGrid columns={2} spacing={5}>
                                   {Cheques.map(cheque => (

                                        <Box height="200x"><ChequeCard
                                                    
                                        SName={cheque.senderid}
                                        RName={cheque.receiverid}
                                        Date={cheque.date}
                                        Chequeid={cheque.Chequeid}
                                        status={cheque.status}
                                        sig={cheque.signature}
                                        amount={cheque.amount}
                                        
                                        />
                                        </Box>

                                        ))}
                                </SimpleGrid>}


                

        </Box>

        </React.Fragment>
    )
}

 export default GetChequeRequests;