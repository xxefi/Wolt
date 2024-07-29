import {
  Box,
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import KeyWords from "../catalog-boxes/KeyWords";
import CatalogFooter from "../footers/CatalogFooter";
import ProductCatalog from "../other/ProductCatalog";
import { motion } from "framer-motion";

export default function Catalog() {
  const [keywords, setKeywords] = useState(["Spring", "Smart", "Modern"]);
  const [price, setPrice] = useState([0, 500]);

  const handleRemoveKeyword = (keyword) => {
    setKeywords(keywords.filter((k) => k !== keyword));
  };

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const MotionBox = motion(Box);

  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
      },
    }),
  };

  return (
    <div>
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={scrollAnimation}
        custom={0}
      >
        <ProductCatalog />
      </MotionBox>
      <KeyWords
        Box={Box}
        Checkbox={Checkbox}
        Slider={Slider}
        SliderFilledTrack={SliderFilledTrack}
        SliderThumb={SliderThumb}
        SliderTrack={SliderTrack}
        Tag={Tag}
        TagCloseButton={TagCloseButton}
        TagLabel={TagLabel}
        Text={Text}
        handlePriceChange={handlePriceChange}
        handleRemoveKeyword={handleRemoveKeyword}
        keywords={keywords}
        price={price}
      />

      <CatalogFooter />
    </div>
  );
}
