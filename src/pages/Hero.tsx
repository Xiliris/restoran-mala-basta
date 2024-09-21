import { FC, useEffect } from "react";
import Video from "../components/Video";
import Button from "../components/Button";
import { motion } from "framer-motion";

const SplitVariant = {
  initial: {
    width: "0",
  },
  animate: {
    width: "100%",
    transition: {
      duration: 0.5,
      delay: 0.5,
      type: "linear",
    },
  },
};

const iconVariant = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

const backgroundVariant = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 2,
      type: "linear",
    },
  },
};

const titleVariant = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      type: "linear",
    },
  },
};

const buttonVariant = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      type: "linear",
    },
  },
};

const Hero: FC = () => {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.classList.add("no-scroll");
      document.body.classList.add("no-scroll");
    }

    setTimeout(() => {
      if (root) {
        root.classList.remove("no-scroll");
        document.body.classList.remove("no-scroll");
      }
    }, 3000);
  }, []);

  return (
    <main
      className="w-screen h-screen relative flex justify-center items-center"
      id="hero"
    >
      <Video />
      <motion.div
        variants={backgroundVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        className="w-screen h-screen bg-black absolute -z-10"
      ></motion.div>
      <div className="inline-flex justify-center items-center flex-col h-screen m-auto">
        <motion.h1 
        variants={titleVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        className="flex justify-center items-center flex-col">

        <span
          className="      text-logo text-emphasis text-9xl translate-y-11 -z-[1] -rotate-6
      md:text-[5rem] md:translate-y-8 
      sm:text-[3rem] sm:translate-y-4
      sm:-rotate-3
        "
        >
          Restoran <br />
        </span>
        <span
          className="text-logo text-primary text-[9rem] 
        md:text-8xl
        sm:text-6xl
        "
        >
          Mala Bašta
        </span>
        </motion.h1>
        <motion.div
          variants={SplitVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-row items-center justify-center mb-5 w-[100%]"
        >
          <span className="py-[0.5px] flex-grow bg-emphasis overflow-hidden"></span>
          <motion.i
            variants={iconVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="fa-solid fa-utensils text-5xl text-emphasis px-5 md:text-5xl sm:text-3xl"
          ></motion.i>
          <span className="py-[0.5px] flex-grow bg-emphasis "></span>
        </motion.div>

        <Button
          href="#about"
          variant={buttonVariant}
          initial="initial"
          whileInView="animate"
        >
          Saznajte Više
        </Button>
      </div>
    </main>
  );
};

export default Hero;
