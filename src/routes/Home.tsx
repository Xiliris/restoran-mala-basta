import { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const Navbar = lazy(() => import("../pages/Navbar"));
const Hero = lazy(() => import("../pages/Hero"));
const About = lazy(() => import("../pages/About"));
const Location = lazy(() => import("../pages/Location"));
const Contact = lazy(() => import("../pages/Contact"));
const Footer = lazy(() => import("../pages/Footer"));

function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Hero />
      <About />
      <Location />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default Home;
