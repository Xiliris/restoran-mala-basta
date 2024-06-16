import { FC } from "react";
import { motion } from "framer-motion";

const copyRightVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "linear",
    },
  },
};

const poweredByVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.3,
      type: "linear",
    },
  },
};

const Footer: FC = () => {
  return (
    <footer className="text-secondary-100 text-center py-10 w-[80vw] m-auto md:text-sm md:py-8">
      <motion.p
        variants={copyRightVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        className="mb-2"
      >
        Copyright &copy; 2024 | Restoran Mala Bašta zadržava sva prava
      </motion.p>
      <motion.p
        variants={poweredByVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        Powered by Adnan Skopljak
      </motion.p>
    </footer>
  );
};

export default Footer;
