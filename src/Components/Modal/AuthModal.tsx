import { auth } from "@/firebase/clientApp";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { authModalState } from "../../atoms/AuthModalAtom";
import AuthInputs from "./AuthInputs/AuthInputs";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [user, loading, error] = useAuthState(auth);

  const [modalState, setModalState] = useRecoilState(authModalState);
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };
  console.log(user);

  useEffect(() => {
    if (user) handleClose();

    console.log(user);
  }, [user]);

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {modalState.view == "login" && "Login"}{" "}
            {modalState.view == "signup" && "Sign Up"}
            {modalState.view == "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              align="center"
              direction="column"
              justify="center"
              width="70%"
            >
              <AuthInputs />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
