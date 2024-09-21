import { FC, ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface TitleProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  initial?: string;
  whileInView?: string;
}

const Title: FC<TitleProps> = ({
  children,
  className = "",
  variants,
  initial = "initial",
  whileInView = "inView",
}) => {
  return (
    <motion.h2
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      viewport={{ once: true, amount: 0.5 }}
      className={`text-4xl text-emphasis text-logo title ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export default Title;
