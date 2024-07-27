import { Box, Button } from "@chakra-ui/react";
import HomeFooter from "../footers/HomeFooter";
import TitleComponent from "../title-component/TitleComponent";
import WoltBackground from "../../../src/assets/wolt-background.jpg";
import { useEffect, useState } from "react";
import LoadingSpinner from "../other/LoadingSpinner";
import { motion } from "framer-motion";
export default function Home() {
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <MotionBox
        className="flex flex-col justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={scrollAnimation}
        custom={0}
      >
        <div
          style={{
            backgroundImage: `url(${WoltBackground})`,
            backgroundColor: "#cbe1ad",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "620px",
            backgroundSize: "75%",
          }}
          className="flex flex-col items-center justify-center h-full relative w-full"
        >
          <TitleComponent Button={Button} Box={Box} />
          <div className="w-full flex-auto m-auto">
            <HomeFooter />
          </div>
        </div>
      </MotionBox>
    </div>
  );
}
