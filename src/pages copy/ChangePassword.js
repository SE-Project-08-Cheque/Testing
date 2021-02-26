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
} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { isNumeric, isRequired } from '../components/Validation';

function ChangePassword() {
  const [hasError, setHasError] = React.useState(false);
  const [show, setShow] = React.useState({
    button1: false,
    button2: false,
    button3: false,
  });

  const [data, setData] = React.useState({
    currentPass: '',
    newPass: '',
    newPassAgain: '',
  });
  const validateBefore = () => {
    isRequired(data.currentPass, validation, setValidation, 0, 'curren Password');
    isRequired(data.newPass, validation, setValidation, 1, 'new password');
    isRequired(data.newPassAgain, validation, setValidation, 2, 'new password again');
    if (!validation.validation[0] && !validation.validation[1] && !validation.validation[2] ) {
      return true;
    }  return false;
  }
  const [validation, setValidation] = React.useState({
    validation: [false, false, false],
    errorMessage: ['', '', '']
});

  const handleChange = event => {
    var value = event.target.value;
    var name = event.target.name;

    if (name === 'currentPass') {
      isRequired(value, validation, setValidation, 0, 'current password');
    } else if (name === 'newPass') {
      isRequired(value, validation, setValidation, 1, 'new password');
    } else if (name === 'newPassAgain') {
      isRequired(value, validation, setValidation, 2, 'new password again');
    }
    setData({ ...data, [event.target.name]: value });
  };


  const handleSubmit = () => {
    var isValid = validateBefore();
    if (!isValid) {
      show.button1 = false;
    }
  };

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
            <h1>Change Your Password!</h1>
          </Center>
          <Divider mb="50px" orientation="horizontal" />

          <form action="submit">
            <Stack spacing={3}>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<LockIcon />} />
                  <Input
                    type={show.button1 ? 'text' : 'password'}
                    placeholder="Current Password"
                    aria-label="Password"
                    name="currentPass"
                    value={data.name}
                    onChange={event => handleChange(event)}
                    isInvalid={validation.validation[0]}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() =>
                        setShow({ ...show, button1: !show.button1 })
                      }
                    >
                      {show.button1 ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText color='crimson'>{validation.errorMessage[0]}</FormHelperText>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<LockIcon />} />
                  <Input
                    type={show.button2 ? 'text' : 'password'}
                    placeholder="New Password"
                    aria-label="Password"
                    name="newPass"
                    value={data.name}
                    onChange={event => handleChange(event)}
                    isInvalid={validation.validation[1]}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() =>
                        setShow({ ...show, button2: !show.button2 })
                      }
                    >
                      {show.button2 ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText color='crimson'>{validation.errorMessage[1]}</FormHelperText>
                <FormHelperText>Must be 8-15 characters long</FormHelperText>
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<LockIcon />} />
                  <Input
                    type={show.button3 ? 'text' : 'password'}
                    placeholder="Re-Enter NewPassword"
                    aria-label="Password"
                    name="newPassAgain"
                    value={data.name}
                    onChange={event => handleChange(event)}
                    isInvalid={validation.validation[2]}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() =>
                        setShow({ ...show, button3: !show.button3 })
                      }
                    >
                      {show.button3 ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText color='crimson'>{validation.errorMessage[2]}</FormHelperText>
                <FormHelperText>
                  Re-Enter your new password to confirm
                </FormHelperText>
              </FormControl>
              <Checkbox pt="70px" pb="30px" isRequired>
                Confirm
              </Checkbox>
              <Button
                mt="50px"
                colorScheme="blue"
                type="submit"
                onClick={handleSubmit}
              >
                Change
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default ChangePassword;
