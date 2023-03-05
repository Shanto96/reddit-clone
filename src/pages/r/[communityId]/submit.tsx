import PageContent from "@/Components/Layouts/PageContent";
import CreatePost from "@/Components/Post/CreatePost";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

type PostSubmitProps = {};

const PostSubmit: React.FC<PostSubmitProps> = () => {
  return (
    <PageContent>
      <>
        <Box p="14px 0" borderBottom="1px solid" borderColor="white">
          <Text> Create a post</Text>
        </Box>
        <CreatePost />
      </>
      <span>Left hand side</span>
    </PageContent>
  );
};
export default PostSubmit;
