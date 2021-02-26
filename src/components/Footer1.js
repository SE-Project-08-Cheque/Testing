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
  useColorMode,
} from '@chakra-ui/react';

function Footer(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        pt="50px"
        position="relative"
        bg={colorMode === 'light' ? 'gray.700' : 'teal.900'}
        color="white"
        bottom="0px"
        mt={{base: '1380px', md: '70px'}}
        width="100%"
      >
        <Center w="100%" mb="10px">
          <Text color={colorMode === 'light' ? 'white' : 'white'}>
            Designed by University of Moratuwa | 2021 All Rights Reserved
          </Text>
        </Center>

        <Box h="10px" w="100%" bg="teal.600"></Box>
      </Flex>
    </>
  );
}

export default Footer;
