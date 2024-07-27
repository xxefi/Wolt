import {
  RangeSlider,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";

export default function KeyWords({
  Box,
  Checkbox,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  keywords,
  handleRemoveKeyword,
  handlePriceChange,
  price,
}) {
  return (
    <Box
      width="210px"
      padding="20px"
      borderWidth="2px"
      borderRadius="10px"
      marginTop="15px"
      marginLeft="15px"
    >
      <Box mb="4">
        <Text fontSize="1g" mb="2">
          Keywords
        </Text>
        {keywords.map((keyword) => (
          <Tag
            size="md"
            key={keyword}
            variant="solid"
            color="black"
            bgColor="#E0E0E0"
            mb="1"
            mr="1"
          >
            <TagLabel>{keyword}</TagLabel>
            <TagCloseButton onClick={() => handleRemoveKeyword(keyword)} />
          </Tag>
        ))}
      </Box>
      <Box mb="4">
        <Checkbox defaultChecked colorScheme="gray" sx={"black"}>
          Label
        </Checkbox>
        <Text opacity="0.5" marginLeft="23px">
          Description
        </Text>
        <Checkbox defaultChecked marginTop="10px" colorScheme="gray">
          Label
        </Checkbox>
        <Text opacity="0.5" marginLeft="23px">
          Description
        </Text>
        <Checkbox defaultChecked marginTop="10px" colorScheme="gray">
          Label
        </Checkbox>
        <Text opacity="0.5" marginLeft="23px">
          Description
        </Text>
      </Box>
      <Box mb="4">
        <Text fontSize="1g" mb="2">
          Label
        </Text>
        <Text mt="2">
          ${price[0]} - ${price[1]}
        </Text>
        <RangeSlider
          aria-label={["min", "max"]}
          colorScheme="blackAlpha"
          onChangeEnd={handlePriceChange}
        >
          <RangeSliderTrack />
          <RangeSliderThumb bg="black" index={0} />
          <RangeSliderThumb bg="black" index={1} />
        </RangeSlider>
      </Box>
      <Box mb="4" className="flex flex-col">
        <Text fontSize="lg" mt="2">
          Color
        </Text>
        <Checkbox marginTop={"6px"} defaultChecked colorScheme="gray">
          Label
        </Checkbox>
        <Checkbox marginTop={"6px"} defaultChecked colorScheme="gray">
          Label
        </Checkbox>
        <Checkbox marginTop={"6px"} defaultChecked colorScheme="gray">
          Label
        </Checkbox>
      </Box>
      <Box mb="4" className="flex flex-col">
        <Text fontSize="lg" mt="2">
          Size
        </Text>
        <Checkbox marginTop={"6px"} defaultChecked colorScheme="gray">
          Label
        </Checkbox>
        <Checkbox marginTop={"6px"} defaultChecked colorScheme="gray">
          Label
        </Checkbox>
        <Checkbox marginTop={"6px"} defaultChecked colorScheme="gray">
          Label
        </Checkbox>
      </Box>
    </Box>
  );
}
