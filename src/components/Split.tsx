import { FC } from "react";
import { motion, Variants } from "framer-motion";

interface SplitProps {
  icon?: boolean;
  className?: string;
  variants?: Variants;
  initial?: string;
  whileInView?: string;
}

const Split: FC<SplitProps> = ({
  icon,
  className = "",
  variants = {},
  initial = "initial",
  whileInView = "animate",
}) => {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.5 }}
      className={`flex flex-row items-center justify-center w-[100%] ${className}`}
    >
      <span className="py-[0.5px] flex-grow bg-emphasis "></span>
      {icon && (
        <i className="fa-solid fa-utensils text-4xl text-emphasis px-5 md:text-2xl"></i>
      )}
      <span className="py-[0.5px] flex-grow bg-emphasis "></span>
    </motion.div>
  );
};

export default Split;
