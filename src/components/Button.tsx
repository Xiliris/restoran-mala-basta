import { FC, ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: Variants;
  initial?: string;
  whileHover?: string;
  whileInView?: string;
  custom?: object;
}

const Button: FC<ButtonProps> = ({
  children,
  href = "",
  className = "",
  variant,
  initial = "initial",
  whileInView = "inView",
  custom,
}) => {
  return (
    <motion.a
      href={href}
      initial={initial}
      whileInView={whileInView}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.3,
          type: "spring",
        },
      }}
      viewport={{ once: true, amount: 0.5 }}
      variants={variant}
      custom={custom}
      className="inline-flex"
    >
      <button
        className={`bg-transparent text-primary border-2 py-3 px-8 rounded-3xl text-lg font-bold
          md:text-md md:py-2 md:px-6
          sm:text-sm sm:py-2 sm:px-4
          ${className}`}
      >
        {children}
      </button>
    </motion.a>
  );
};

export default Button;
