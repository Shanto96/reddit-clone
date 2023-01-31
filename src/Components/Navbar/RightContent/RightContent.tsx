import AuthModal from "@/Components/Modal/AuthModal";
import { auth } from "@/firebase/clientApp";
import { Button, Flex, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type RightContentProps = {};

const RightContent: React.FC<RightContentProps> = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default RightContent;
