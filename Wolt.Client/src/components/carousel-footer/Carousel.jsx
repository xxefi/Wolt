import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Box width="100%" maxWidth="500px" mx="auto" pb={33}>
      <Slider {...settings}>
        <Box p={2}>
          <Image
            borderRadius="10px"
            src="../src/assets/bakubus.jpg"
            alt="Slide 1"
          />
        </Box>
        <Box p={2}>
          <Image
            borderRadius="10px"
            src="../src/assets/ayna_logo_blue.png"
            alt="Slide 2"
          />
        </Box>
        <Box p={2}>
          <Image
            borderRadius="10px"
            src="../src/assets/bakubus.jpg"
            alt="Slide 3"
          />
        </Box>
        <Box p={2}>
          <Image
            borderRadius="10px"
            src="../src/assets/ayna_logo_blue.png"
            alt="Slide 4"
          />
        </Box>
        <Box p={2}>
          <Image
            borderRadius="10px"
            src="../src/assets/bakubus.jpg"
            alt="Slide 5"
          />
        </Box>
      </Slider>
    </Box>
  );
}
