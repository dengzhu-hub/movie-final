import {
  Card,
  CardBody,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Card width={"300px"} borderRadius={"lg"}>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonCircle size="10" />
        <SkeletonText
          mt={"4"}
          noOfLines={4}
          skeletonHeight="2"
          startColor="gray.300"
          endColor="gray.600"
          spacing={4}
        />
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;
