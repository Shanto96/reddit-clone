import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      width="100%"
      mb={4}
    >
      <Button variant="oauth" mt={2} width="100%">
        <Image src="/images/googlelogo.png" height="20px" mr={2} />
        Continue with Google
      </Button>
      <Button variant="oauth" mt={2} mb={2} width="100%">
        Some other provider
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
