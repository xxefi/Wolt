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
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Catalog() {
  const [keywords, setKeywords] = useState(["Spring", "Smart", "Modern"]);
  const [price, setPrice] = useState([0, 500]);

  useEffect(() => {
    document.title = "Catalog";
  }, []);

  const handleRemoveKeyword = (keyword) => {
    setKeywords(keywords.filter((k) => k !== keyword));
  };

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  return (
    <div>
      <ProductCatalog />
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
