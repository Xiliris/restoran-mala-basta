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
      className="flex w-screen h-auto pt-20 bg-default-200 justify-center items-center flex-col"
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
          className="w-full absolute bottom-0 left-0 flex justify-center items-center"
        >
          <div className="bg-default-200 p-8 rounded-lg translate-y-1">
            <div className="relative">
              <div className="rounded-lg border-2 border-emphasis absolute w-full h-[20vh]"></div>
              <div className="flex flex-col justify-between items-center px-10">
                <Title className="text-center mb-3 inline bg-default-200 px-4 md:text-2xl md:mb-0 -translate-y-1/2">
                  Lokacija
                </Title>
                <p className="text-2xl text-primary text-center sm:text-lg md:m-auto">
                  Bugojanska 5, Sarajevo
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Location;
