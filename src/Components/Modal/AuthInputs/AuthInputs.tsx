import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { authModalState } from "@/atoms/AuthModalAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Login from "./Login";
import SignUp from "./SignUp";
import OAuthButtons from "./OAuthButtons";
import ResetPassword from "./ResetPassword";

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <>
      {modalState.view === "resetPassword" ? (
        <ResetPassword />
      ) : (
        <>
          <OAuthButtons />
          <Text mb={2} color="gray.400" fontWeight="700">
            OR
          </Text>
          {modalState.view === "login" && <Login />}
          {modalState.view === "signup" && <SignUp />}{" "}
        </>
      )}
    </>
  );
};
export default AuthInputs;
