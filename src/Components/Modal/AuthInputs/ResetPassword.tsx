import React, { useRef, useState } from "react";
import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/AuthModalAtom";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const emailRef = useRef("");
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendPasswordResetEmail(emailRef?.current?.value);
    setSuccess(true);
  };
  return (
    <Flex direction="column" justify="center" align="center" gap={3}>
      {success ? (
        <Text> Check your email :)</Text>
      ) : (
        <>
          <Image src="/images/redditFace.svg" height="35px" />
          <Text mt={2} fontWeight="700" color="black.500">
            {" "}
            Reset Your Password
          </Text>
          <Text color="gray.500" fontSize="11pt" align="center">
            Enter the email assoicated with your account and we will send you a
            reset link
          </Text>
          <form onSubmit={onSubmit}>
            <Input
              type="email"
              name="email"
              placeholder="email"
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
              ref={emailRef}
            />
            <Button
              width="100%"
              height="36px"
              mt={2}
              type="submit"
              isLoading={sending}
            >
              Rest Password
            </Button>
          </form>
          <Flex gap={4}>
            <Text
              color="blue.500"
              fontWeight={500}
              cursor="pointer"
              onClick={() => {
                setAuthModalState((prev) => ({
                  ...prev,
                  view: "login",
                }));
              }}
            >
              Login
            </Text>
            .{" "}
            <Text
              color="blue.500"
              fontWeight={500}
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
        </>
      )}
    </Flex>
  );
};
export default ResetPassword;
