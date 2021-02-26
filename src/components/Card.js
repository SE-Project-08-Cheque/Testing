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
  ReactRouterLink
} from '@chakra-ui/react';
import { StarIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { MdAccountCircle, MdArrowForward, MdSend, MdZoomIn } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <Box
      width="auto"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="10px"
      mb="10px"
      ml="20px"
      mr="20px"
    >
      <Grid
        h="auto"
        templateColumns="repeat(8, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem
          colSpan={{ base: 8, md: 2 }}
          rowSpan={{ base: 1, md: 3 }}
          pt="12px"
        >
          <Center>
            <Image
              src={props.imageUrl}
              alt={props.imageAlt}
              borderRadius="full"
              boxSize="190px"
            />
          </Center>
        </GridItem>

        <GridItem colSpan={{ base: 8, md: 5 }} rowSpan={{ base: 1, md: 3 }}>
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Secured
              </Badge>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              lineHeight="tight"
              isTruncated
            >
              <Heading size="2xl">
                {props.type}
              </Heading>
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          colSpan={{ base: 8, md: 1 }}
          rowSpan={{ base: 1, md: 3 }}
          pt="50px"
        >
          <Link as={ReactRouterLink} to={props.link}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="solid"
              size="lg"
              mt="30px"
              rightIcon={<MdSend />}
            >
              Go
              </Button>
          </Link>

        </GridItem>
      </Grid>
    </Box>
  );
}

export default Card;