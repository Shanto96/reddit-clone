import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex mr={2} maxWidth={user ? "auto" : "600px"} flexGrow={1} align="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" mb={1} />}
        />
        <Input
          placeholder="Search Reddit"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
          color="gray.500"
          ml={2}
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
