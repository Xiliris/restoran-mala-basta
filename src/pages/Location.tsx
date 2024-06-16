import { FC } from "react";
import Map from "../components/Map";
import Title from "../components/Title";
import { motion } from "framer-motion";

const mapVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "linear",
    },
  },
};

const locationVariant = {
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

const Location: FC = () => {
  return (
    <section
      className="flex w-screen h-auto pt-20 bg-default-200"
      id="location"
    >
      <motion.div
        variants={mapVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        className="w-screen h-[80vh] m-auto relative overflow-hidden border-b-2 border-t-2 border-emphasis"
      >
        <div className="w-[100%] h-[100%] overflow-hidden">
          <Map />
        </div>
        <motion.div
          variants={locationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="w-[50%] h-[17%]  absolute bottom-0 left-0 z-10 bg-default-200 translate-x-1/2 rounded-3xl p-6 md:w-[100%] md:h-[21%] md:translate-x-0 translate-y-5"
        >
          <div className="border-2 border-emphasis rounded-2xl border-b-0 flex justify-start items-center flex-col h-[130%]">
            <Title className="text-center mb-3 inline bg-default-200 -translate-y-1/2 px-4 md:text-2xl md:mb-0">
              Lokacija
            </Title>
            <p className="text-2xl text-primary text-center -translate-y-1/2  sm:text-lg md:m-auto">
              Bugojanska 5, Sarajevo
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Location;
