import React from 'react';
// import './Chequeform.css';
// import styled from 'styled-components'
import {
  FormControl,
  FormLabel,
  // Heading,
  Box,
  Button,
    Input,
    Center,
    Stack,
    // InputGroup,
    // InputLeftElement,
    // PhoneIcon,
    // InputRightElement,
    // CheckIcon,
    // InputLeftAddon,
    // InputRightAddon
  } from "@chakra-ui/react"

const Form = (props)=>{
  var mindate=new Date();
  mindate.setMonth(mindate.getMonth()-1);
  mindate=mindate.toISOString().slice(0, 10);
  var maxdate=new Date();
  maxdate.setMonth(maxdate.getMonth()+1);
  maxdate=maxdate.toISOString().slice(0, 10);


    return (
<div>
  <Center>
  <Box bg="#ffffff"  w={[300, 400, 560]} p={10} color="black" border="1px" borderColor="gray.200" borderRadius="10px">
  {/* <Heading as="h3" size="lg" pb={10}>
    Send a Cheque
  </Heading> */}
  <Stack spacing={3}>
    <form onSubmit={props.submit}>
  <FormControl id="payto" isRequired><FormLabel>Pay To Account No</FormLabel>
  <Input onChange={(event)=>props.change(event,'payto')} value={props.payto} size="md" />
  </FormControl>
  <FormControl id="amount" isRequired><FormLabel>Amount</FormLabel>
  <Input min="0" maxLe="5" onChange={(event)=>props.change(event,'amount')} value={props.amount} size="md" maxLength="14"/>
  </FormControl>
  <FormControl id="date" isRequired><FormLabel>Date</FormLabel>
  <Input type='date' onChange={(event)=>props.change(event,'date')} value={props.date} size="md" min={mindate} max={maxdate} />
  </FormControl>
  <FormControl id="Note"><FormLabel>Note</FormLabel>
  <Input onChange={(event)=>props.change(event,'reason1')} value={props.reason1} size="md" maxLength="50"/>
  <Input onChange={(event)=>props.change(event,'reason2')} value={props.reason2} size="md" maxLength="50"/>
  </FormControl>
  <Button type="Success" colorScheme="teal" w="100%" mt="5" variant="solid">Send</Button>
  </form>
    
  
    {/* <Input onChange={(event)=>props.change(event,'reason2')} value={props.reason2} size="md" maxLength="50"/> */}
    {/* <Input placeholder="Amount" size="md" /> */}
    {/* <Input type="date" placeholder="medium size" size="md" /> */}
    {/* <Input placeholder="medium size" size="md" /> */}
</Stack>
</Box>
    
</Center>

</div>

    );
}
export default Form;

