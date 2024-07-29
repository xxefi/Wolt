import FrontCells from "../../../src/assets/front-cells.png";
import styles from "../../../src/styles/AboutUs.module.css";
import Discovery from "../../../src/assets/ios-discovery.jpg";
import Apple from "../../../src/assets/appstore.png";
import GooglePlay from "../../../src/assets/googlePlay.png";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
export default function AboutUs() {
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
    <MotionBox
      className="flex flex-col justify-center items-center"
      initial="hidden"
      animate="visible"
      variants={scrollAnimation}
      custom={0}
    >
      <div className={styles.div}>
        <div className={styles.twoDiv}>
          <div className={styles.imageDiv}>
            <img
              src={Discovery}
              alt="Discovery"
              style={{ transform: "translate3d(0px, -271.87px, 0px)" }}
            />
          </div>
          <div className={styles.backDiv}>
            <img
              style={{
                height: "100%",
                left: "0",
                objectFit: "cover",
              }}
              src={FrontCells}
              alt="FrontCells"
            />
          </div>
          <div className={styles.form}>
            <h2 className={styles.h2Text}>Honey, we’re not cooking tonight</h2>
            <p
              style={{
                opacity: "0.7",
                fontSize: "15px",
                marginBottom: "30px",
              }}
            >
              Get the Apple-awarded Wolt app and choose from 40,000 restaurants
              and hundreds of stores in 20+ countries. Discover and get what you
              want – our courier partners bring it to you.
            </p>
            <a
              className={styles.a}
              href="https://apps.apple.com/us/app/wolt-delivery-food-and-more/id943905271"
              data-platform="ios"
              target="_blank"
            >
              <img src={Apple} alt="App Store" />
            </a>
            <a
              style={{ width: 10 }}
              className={styles.a}
              href="https://play.google.com/store/apps/details?id=com.wolt.android&hl=ru&pli=1"
              data-platform="android"
              target="_blank"
            >
              <img src={GooglePlay} alt="Google Play" />
            </a>
          </div>
        </div>
      </div>
    </MotionBox>
  );
}
