import { Box, Button, Image, Text } from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";
import NewsImage from "../../assets/news.png";
import { motion } from "framer-motion";

export default function News() {
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
    <Box className="flex flex-col md:flex-col items-center justify-between p-4">
      <MotionBox
        className="flex flex-col justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={scrollAnimation}
        custom={0}
      >
        <Box className="md:w-1/2 p-4">
          <Box className="flex items-center text-gray-500">
            <FaClock className="mr-2" />
            <Text as="time" dateTime="2024-07-03">
              3 July 2024
            </Text>
            <Text className="ml-2">BLOG</Text>
          </Box>
          <Text className="text-4xl font-bold mt-2">
            Algorithmic Transparency: Generally about Generative AI at Wolt
          </Text>
        </Box>
        <Box className="md:w-1/2 p-4">
          <Image
            src={NewsImage}
            alt="News Image"
            className="w-full"
            borderRadius={10}
          />
          <Text className="mt-4 text-lg text-gray-500">
            Ever since ChatGPT entered our vocabulary in 2023, generative AI has
            become a household name for many. It is likely even your grandmother
            has heard about it. But what really is generative AI? In this post,
            we expand on our thoughts about it and how it may be used at Wolt.
            The text comes from Wolt's Algorithmic Transparency Report 2024.
          </Text>
          <Text className="mt-10 text-lg text-gray-500">
            Very simply put, Large Language Models (LLMs) churn through vast
            amounts of text to learn the patterns of words in those texts. Once
            the patterns are learned, the models are able to generate new text
            based on some input text, like a question. Generative models pick
            words based on probabilities, generating them one at a time. The
            model's ‘intelligence’ comes from learning many patterns from its
            vast amount of data.
          </Text>
          <Text className="mt-7 text-lg text-gray-500">
            It's clear that generative AI has caused unforeseen waves in the
            technology space, and we at Wolt are strong believers in its
            potential to change the way we use tech in the medium to long term
            for the better. With such a significant shift, it's understandable
            that it will take some time for the tech industry to figure out how
            this technology can be applied in the most useful way. So far, we
            haven't generally seen any killer features based on generative AI,
            especially not in user-facing interfaces, and the early adopters are
            still testing the best application areas for the technology.
          </Text>
          <Text className="text-3xl font-bold mt-20">
            Generative AI at Wolt
          </Text>
          <Text className="mt-7 text-lg text-gray-500">
            From the point of view of a company operating a business in the
            physical world, generative AI can help us improve efficiency in
            several areas of our operations; the physical world is a messy place
            and generative AI can help at the interface of the physical and
            digital world!
          </Text>
          <Text className="mt-5 text-lg text-gray-500">
            For example, we use third-party automation tools like X-Menu and
            OpenAI’s GPT models to help and speed up the online transition for
            our local merchant partners. X-Menu helps extract restaurant menu
            information directly into Wolt's merchant tools, avoiding boring and
            time-consuming manual tasks. The GPT models help with the
            integration of large, intricate product lists from retailers and
            merchants into our tools.
          </Text>
          <Text className="mt-5 text-lg text-gray-500">
            Other ways we use generative AI is through OpenAI’s API to analyze
            and summarize text, received through our Support chat, regardless of
            the language. This assists our Support in being more efficient in
            responding to partners on all sorts of matters ranging from feedback
            to delivery instructions.
          </Text>
          <Text className="mt-5 text-lg text-gray-500">
            While the technology is useful for understanding the unstructured
            free text and images, and other data that we collect, the impact of
            generating new text and data is still lagging behind. One hindrance
            we currently see with LLM-powered features is the unsolved quality
            control and security aspects of the technology, not to mention the
            lack of warmth and human tone of voice in the generated text.
          </Text>
        </Box>
      </MotionBox>
    </Box>
  );
}
