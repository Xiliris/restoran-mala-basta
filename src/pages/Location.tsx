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
      duration: 1,
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
      duration: 1,
      delay: 0.5,
      type: "spring",
    },
  },
};

const Location: FC = () => {
  return (
    <section
      className="flex w-screen h-screen pt-20 bg-default-200"
      id="location"
    >
      <motion.div
        variants={mapVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        className="w-[80vw] h-[80vh] m-auto bg-default-200 p-6 rounded-3xl relative overflow-hidden shadow-md border-2 border-emphasis md:h-[70vh]"
      >
        <div className="w-[100%] h-[100%] rounded-xl overflow-hidden">
          <Map />
        </div>
        <motion.div
          variants={locationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="w-[50%] h-[15%] absolute bottom-0 left-0 z-10 bg-default-200 translate-x-1/2 rounded-3xl p-6 md:w-[100%] md:translate-x-0"
        >
          <div className="border-2 border-emphasis rounded-2xl border-b-0 flex justify-start items-center flex-col h-40">
            <Title className="text-center mb-3 inline bg-default-200 -translate-y-1/2 px-4 md:text-2xl md:mb-0">
              Lokacija
            </Title>
            <p className="text-2xl text-primary text-center -translate-y-1/2 md:text-lg">
              Bugojanska 5, Sarajevo
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Location;
