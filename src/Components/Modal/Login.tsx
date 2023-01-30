import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { authModalState } from "@/atoms/AuthModalAtom";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const onSubmit = () => {};
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form>
      <Input
        type="email"
        placeholder="Email"
        mb={2}
        name="email"
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "grey.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.100"
      />
      <Input
        type="password"
        placeholder="Password"
        mb={2}
        name="password"
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "grey.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "noen",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.100"
      />
      <Button width="100%" height="36px" mt={2} mb={2} type="submit">
        Log in
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}> New Here</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => {
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }));
          }}
        >
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
