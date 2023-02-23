import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <Flex
      direction="column"
      alignContent="center"
      alignItems="center"
      minHeight="60vh"
      justifyContent="center"
    >
      Sorry that community doesn't exist or has been banned
      <Link href="/">
        <Button mt={4}>GO HOME</Button>
      </Link>
    </Flex>
  );
};
export default NotFound;
