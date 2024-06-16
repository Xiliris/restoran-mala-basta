import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import Split from "../components/Split";

const navbarVariants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

const sidebarVariants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      type: "linear",
      duration: 0.3,
    },
  },
};

const Navbar: FC = () => {
  const { scrollY } = useScroll();
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState("hidden");

  function toggleSidebarHandler() {
    const newState = toggleSidebar === "hidden" ? "visible" : "hidden";
    setToggleSidebar(newState);
    if (newState === "visible") {
      const root = document.getElementById("root");
      if (root) {
        root.classList.add("no-scroll");
        document.body.classList.add("no-scroll");
      }
    } else {
      const root = document.getElementById("root");
      if (root) {
        root.classList.remove("no-scroll");
        document.body.classList.remove("no-scroll");
      }
    }
    console.log(toggleSidebar);
  }

  useEffect(() => {
    return scrollY.onChange((currentScrollY) => {
      if (currentScrollY > window.innerHeight * 0.9) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    });
  }, [scrollY]);

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate={navbarVisible ? "visible" : "hidden"}
        className="w-screen fixed z-50 bg-gradient-to-b from-black to-transparent backdrop-blur-sm"
      >
        <div className="flex justify-between items-center py-10 w-[80vw] m-auto">
          <a className="z-50" href="#hero">
            <h2 className="text-primary text-logo text-2xl cursor-pointer translate-y-1 hover:text-emphasis transition-all duration-300 ease-in-out">
              Mala Bašta
            </h2>
          </a>
          <i
            className="fa-solid fa-bars-staggered text-2xl text-primary cursor-pointer z-50 hover:text-emphasis transition-all duration-300 ease-in-out"
            onClick={() => toggleSidebarHandler()}
          ></i>
        </div>
        <aside>
          <motion.ul
            variants={sidebarVariants}
            initial="hidden"
            animate={toggleSidebar}
            className={`flex flex-col items-start justify-start fixed top-0 right-0 h-screen w-screen bg-default-200 z-30 p-10 pt-24`}
          >
            <Split icon={true} />
            <div className="h-screen w-full flex flex-col items-center justify-start gap-6 mt-4">
              <AsideItem
                href="#hero"
                name="Početna"
                handleClick={() => toggleSidebarHandler()}
              />
              <AsideItem
                href="#about"
                name="O nama"
                handleClick={() => toggleSidebarHandler()}
              />
              <RedirectItem
                href="/menu"
                name="Meni"
                handleClick={() => toggleSidebarHandler()}
              />
              <RedirectItem
                href="#location"
                name="Lokacija"
                handleClick={() => toggleSidebarHandler()}
              />
              <AsideItem
                href="#contact"
                name="Kontakt"
                handleClick={() => toggleSidebarHandler()}
              />
            </div>
            <div className="m-auto flex justify-between items-center w-[20%] mb-10 md:w-[40%] md:mb-5">
              <a href="https://www.facebook.com/restoranMalaBasta?locale=hr_HR">
                <i className="fa-brands fa-facebook text-primary text-4xl md:text-2xl"></i>
              </a>
              <a href="tel: +387 63 711 520">
                <i className="fa-solid fa-phone text-primary text-4xl md:text-2xl"></i>
              </a>
              <a href="https://www.instagram.com/official.restoranmalabasta/">
                <i className="fa-brands fa-instagram text-primary text-4xl md:text-2xl"></i>
              </a>
            </div>
            <Split />
            <div className="text-secondary-100 text-center py-10 w-[80vw] m-auto md:text-sm md:py-8">
              <p className="mb-2">
                Copyright &copy; 2024 | Restoran Mala Bašta zadržava sva prava
              </p>
              <p>Powered by Adnan Skopljak</p>
            </div>
            <Split />
          </motion.ul>
        </aside>
      </motion.nav>
    </>
  );
};

interface AsideItemProps {
  href: string;
  name: string;
  handleClick: () => void;
}

const AsideItem: FC<AsideItemProps> = ({ href, name, handleClick }) => {
  return (
    <li className="text-primary text-xl">
      <a href={href} onClick={handleClick}>
        {name}
      </a>
    </li>
  );
};

const RedirectItem: FC<AsideItemProps> = ({ href, name, handleClick }) => {
  return (
    <Link to={href} onClick={handleClick}>
      <li className="text-primary text-xl">{name}</li>
    </Link>
  );
};

export default Navbar;
