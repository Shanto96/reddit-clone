import CreateCommunityModal from "@/Components/Modal/CreateCommunityModal/CreateCommunityModal";
import { auth } from "@/firebase/clientApp";
import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GrAdd } from "react-icons/gr";

type CommunityProps = {};

const Community: React.FC<CommunityProps> = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <>
      <CreateCommunityModal
        open={open}
        handleClose={() => setOpen(false)}
        userId={user?.uid!}
      />
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{ bg: "gray.100" }}
        onClick={() => setOpen(true)}
      >
        <Flex align="center">
          <Icon fontSize={20} mr={2} as={GrAdd} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Community;
