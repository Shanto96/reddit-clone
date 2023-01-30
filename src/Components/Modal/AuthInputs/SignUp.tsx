import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/AuthModalAtom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/error";

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const [signUpForm, setSingUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const setAuthModalState = useSetRecoilState(authModalState);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError("");
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError("Both Password doesn't match");
      return;
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSingUpForm((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        required
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
        required
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
      <Input
        required
        type="password"
        placeholder="Confirm Password"
        mb={2}
        name="confirmPassword"
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
      {error ||
        (userError && (
          <Text align="center" fontSize="10pt" color="red">
            {" "}
            {error ||
              FIREBASE_ERRORS[
                userError.message as keyof typeof FIREBASE_ERRORS
              ]}
          </Text>
        ))}
      <Button
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        type="submit"
        isLoading={loading}
      >
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}> Already a redditor</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => {
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }));
          }}
        >
          Log In
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
