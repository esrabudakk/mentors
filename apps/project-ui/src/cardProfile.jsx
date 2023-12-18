import React from "react";
import {
  Stack,
  Button,
  Heading,
  Image,
  Card,
  CardBody,
  Divider,
  CardFooter,
  Text,
} from "@chakra-ui/react";

const CardProfile = ({ id, title, description, price, image }) => {
  return (
    <>
      <Card maxW="ml" width="300px" height="480px">
        <CardBody height="500px">
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="1" spacing="1">
            <Heading height="25px" size="sm">
              {title}
            </Heading>
            <Text>{description}</Text>
            <Text color="blue.600" fontSize="xl">
              {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter height="250px">
          <Button variant="solid" colorScheme="blue" mt="1" spacing="1">
            Push Mee
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardProfile;
