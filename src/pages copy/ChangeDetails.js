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
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Divider,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  Stack,
  Checkbox,
  ReactRouterLink,
} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import { isNumeric, isRequired } from '../components/Validation';

function ChangeDetails() {
  const [hasError, setHasError] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [data, setData] = React.useState({
    name: '',
    phoneNumber: '',
    address: '',
    currentPassword: '',
  });
  const validateBefore = () => {
    isRequired(data.name, validation, setValidation, 0, 'name');
    isNumeric(data.phoneNumber, validation, setValidation, 1, 'phone number');
    isRequired(data.address, validation, setValidation, 2, 'address');
    if (!validation.validation[0] && !validation.validation[1] && !validation.validation[2] ) {
      return true;
    }  return false;
  }
  const [validation, setValidation] = React.useState({
    validation: [false, false, false, false],
    errorMessage: ['', '', '', '']
});

  const handleChange = event => {
    var value = event.target.value;
    var name = event.target.name;

    if (name === 'name') {
      isRequired(value, validation, setValidation, 0, 'name');
    } else if (name === 'phoneNumber') {
      isNumeric(value, validation, setValidation, 1, 'phone number');
    } else if (name === 'address') {
      isRequired(value, validation, setValidation, 2, 'address');
    }
    else if (name === 'currentPassword') {
      isRequired(value, validation, setValidation, 2, 'currentPassword');
    }
    setData({ ...data, [event.target.name]: value });
  };

  const handleSubmit = () => {
    var isValid = validateBefore()
    if (!isValid) {

    }
  }

  return (
    <>
      <Sidebar />

      <Box
        borderStyle="solid"
        borderColor="gray.800"
        boarderRadius="200px"
        mt={{ base: '400px', md: '-30px' }}
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
          pt="30px"
          mt="-20px"
          borderRadius="20px"
        >
          <Center pb="10px">
            <h1>Change Details!</h1>
          </Center>
          <Divider mb="50px" orientation="horizontal" />

          <form action="submit">
            <Stack spacing={3}>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement>
                    <i class="fas fa-user"></i>
                  </InputLeftElement>

                  <Input
                    type="text"
                    placeholder="Name"
                    aria-label="name"
                    errorBorderColor="crimson"
                    name="name"
                    value={data.name}
                    onChange={event => handleChange(event)}
                    isInvalid={validation.validation[0]}
                  />
                </InputGroup>
                <FormHelperText color='crimson'>{validation.errorMessage[0]}</FormHelperText>
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement>
                    <i class="fas fa-phone-alt"></i>
                  </InputLeftElement>

                  <Input
                    type="text"
                    placeholder="Phone Number"
                    aria-label="phoneNumber"
                    errorBorderColor="crimson"
                    name="phoneNumber"
                    value={data.phoneNumber}
                    onChange={event => handleChange(event)}
                    isInvalid={validation.validation[1]}
                  />
                </InputGroup>
                <FormHelperText color='crimson'>{validation.errorMessage[1]}</FormHelperText>
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement>
                    <i class="fas fa-map-marker-alt"></i>
                  </InputLeftElement>

                  <Input
                    type="text"
                    placeholder="Address"
                    aria-label="address"
                    errorBorderColor="crimson"
                    name="address"
                    value={data.address}
                    onChange={event => handleChange(event)}
                    isInvalid={validation.validation[2]}
                  />
                </InputGroup>
                <FormHelperText color='crimson'>{validation.errorMessage[2]}</FormHelperText>
              </FormControl>

              
              <Checkbox pt="0px" isRequired>
                Confirm
              </Checkbox>
              <small>Confirm before updating</small>

              <Link as={ReactRouterLink} to="/changePassword">
                <Button
                  w="100%"
                  boxShadow="dark-lg"
                  colorScheme="red"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Update
                </Button>
              </Link>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default ChangeDetails;
