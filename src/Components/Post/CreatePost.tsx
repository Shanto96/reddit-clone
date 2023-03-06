import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { BiPoll } from "react-icons/bi";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import TabItem from "./TabItem";
import TextInputs from "./TextInputs";
import ImageUpload from "./ImageUpload";

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
  const [selectedItem, setSelectedItem] = useState(formTabs[0].title);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string>();
  const [textInputs, setTextInputs] = useState({
    title: "",
    body: "",
  });

  const onTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;

    setTextInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (event.target?.files?.[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = (readerEvent: any) => {
      if (readerEvent.target?.result) {
        setSelectedFile(readerEvent.target.result as string);
      }
    };
  };

  const handleCreatePost = async () => {};
  return (
    <Flex direction="column" bg="white" borderRadius={4} mt={2}>
      <Flex width="100%">
        {formTabs.map((item, i) => (
          <TabItem
            key={item.title}
            item={item}
            selected={item.title === selectedItem}
            setSelected={setSelectedItem}
          />
        ))}
      </Flex>
      <Flex p={4}>
        {selectedItem === "Post" && (
          <TextInputs
            textInputs={textInputs}
            onChange={onTextChange}
            handleCreatePost={handleCreatePost}
            loading={loading}
          />
        )}
        {selectedItem === "Image & Video" && (
          <ImageUpload
            onSelectImage={onSelectImage}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            setSelectedTab={setSelectedItem}
          />
        )}
      </Flex>
    </Flex>
  );
};
export default CreatePost;
