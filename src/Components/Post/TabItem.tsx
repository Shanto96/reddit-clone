import { Flex, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { TabItem } from "./CreatePost";

type TabItemProps = {
  item: TabItem;
  selected: Boolean;
  setSelected: (value: string) => void;
};

const TabItem: React.FC<TabItemProps> = ({ item, selected, setSelected }) => {
  return (
    <Flex
      justify="center"
      flexGrow={1}
      align="center"
      p="14px 0"
      cursor="pointer"
      _hover={{ bg: "gray.50" }}
      color={selected ? "blue.500" : "gray.500"}
      borderWidth={selected ? "0px 1px 2px 0px" : "0px 1px 1px 0px "}
      borderBottomColor={selected ? "blue.500" : "gray.200"}
      borderRightColor="gray.200"
      onClick={() => setSelected(item.title)}
    >
      <Flex align="center" height="20px" mr={2}>
        <Icon as={item.icon} />
      </Flex>
      <Text fontSize="10pt">{item.title}</Text>
    </Flex>
  );
};
export default TabItem;
