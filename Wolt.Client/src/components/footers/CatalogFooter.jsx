import { Box, Text, Link, Tooltip } from "@chakra-ui/react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function CatalogFooter() {
  return (
    <Box className="flex flex-col mt-10">
      <Box className="flex-grow"></Box>
      <hr />
      <Box className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex space-x-4 mb-4">
                <Tooltip label="Twitter" aria-label="Twitter" bgColor="black">
                  <a href="https://x.com/woltapp" target="_blank">
                    <FaXTwitter size="30" title="Twitter" color="black" />
                  </a>
                </Tooltip>
                <Tooltip
                  label="Instagram"
                  aria-label="Instagram"
                  bgColor="#C13584"
                >
                  <a href="https://instagram.com/wolt" target="_blank">
                    <FaInstagram size="30" title="Instagram" color="black" />
                  </a>
                </Tooltip>
                <Tooltip label="YouTube" aria-label="YouTube" bgColor="red">
                  <a href="https://youtube.com/@wolt3241" target="_blank">
                    <FaYoutube size="30" title="YouTube" color="black" />
                  </a>
                </Tooltip>
                <Tooltip
                  label="Linkedin"
                  aria-label="Linkedin"
                  bgColor="#0A66C2"
                >
                  <a
                    href="https://www.linkedin.com/company/wolt-oy/?originalSubdomain=fi"
                    target="_blank"
                  >
                    <FaLinkedin size="30" title="Linkedin" color="black" />
                  </a>
                </Tooltip>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Text className="text-lg font-semibold mb-4">Use cases</Text>
              <Link href="#" className="text-gray-600 hover:underline mb-2">
                UI design
              </Link>
              <Link href="#" className="text-gray-600 hover:underline mb-2">
                UX design
              </Link>
              <Link href="#" className="text-gray-600 hover:underline mb-2">
                Wireframing
              </Link>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <Text className="text-lg font-semibold mb-4">Explore</Text>
              <Link href="#" className="text-gray-600 hover:underline mb-2">
                Design
              </Link>
              <Link href="#" className="text-gray-600 hover:underline mb-2">
                Prototyping
              </Link>
              <Link href="#" className="text-gray-600 hover:underline mb-2">
                Development features
              </Link>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <Text className="text-lg font-semibold mb-4">Resources</Text>
              <Link href="#" className="text-gray-600 hover:underline mb-2">
                Blog
              </Link>
              <Link href="#" className="text-gray-600 hover:underline mb-2">
                Best practices
              </Link>
              <Link href="#" className="text-gray-600 hover:underline mb-2">
                Colors
              </Link>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
