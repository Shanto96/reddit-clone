import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { BiPoll } from "react-icons/bi";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";

type CreatePostProps = {};
const formTabs = [
  {
    title: "Post",
    icon: IoDocumentText,
  },
  {
    title: "Image & Video",
    icon: IoImageOutline,
  },
  {
    title: "Link",
    icon: BsLink45Deg,
  },
  {
    title: "Poll",
    icon: BiPoll,
  },
  {
    title: "Talk",
    icon: BsMic,
  },
];
export type TabItem = {
  title: string;
  icon: typeof Icon.arguments;
};

const CreatePost: React.FC<CreatePostProps> = () => {
  return (
    <Flex direction="column" bg="white" borderRadius={4} mt={2}>
      <Flex width="100%"></Flex>
    </Flex>
  );
};
export default CreatePost;
