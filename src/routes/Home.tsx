import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Loading from "../components/Loading";

const Navbar = lazy(() => import("../pages/Navbar"));
const Hero = lazy(() => import("../pages/Hero"));
const About = lazy(() => import("../pages/About"));
const Location = lazy(() => import("../pages/Location"));
const Contact = lazy(() => import("../pages/Contact"));
const Footer = lazy(() => import("../pages/Footer"));

const appVariants = {
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <motion.div variants={appVariants} exit="exit">
        <Navbar />
        <Hero />
        <About />
        <Location />
        <Contact />
        <Footer />
      </motion.div>
    </Suspense>
  );
}

export default Home;
