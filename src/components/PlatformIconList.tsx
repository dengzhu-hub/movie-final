import { iconMap } from "../constant";
import { PlatformIconListProps } from "../constant/type";
import { HStack, Icon } from "@chakra-ui/react";

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]}  color={'gray.500'}/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
