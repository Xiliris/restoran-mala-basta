import { FC, useState } from "react";
import { motion } from "framer-motion";
import Split from "../components/Split";

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
  const [toggleSidebar, setToggleSidebar] = useState("hidden");

  function toggleSidebarHandler() {
    const newState = toggleSidebar === "hidden" ? "visible" : "hidden";
    setToggleSidebar(newState);
  }

  return (
    <>
      <motion.nav className="w-screen fixed z-50 bg-gradient-to-b from-black to-transparent backdrop-blur-sm">
        <div className="flex justify-between items-center py-10 w-[80vw] m-auto">
          <a className="z-50" href="/">
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
            <div className="h-screen w-full grid grid-cols-2 justify-start mt-5">
              <div className="flex flex-col justify-start items-start gap-4">
                <AsideItem
                  href="/"
                  name="Početna"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#hladna-predjela"
                  name="Hladna Predjela"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#topla-predjela"
                  name="Topla Predjela"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#corbe"
                  name="Čorbe"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#specijalitet-kuce"
                  name="Specijaliteti Kuće"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#dnevna-ponuda"
                  name="Dnevna Ponuda"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#jela-sa-zara"
                  name="Jela sa žara"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#salata"
                  name="Salate"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#prilozi"
                  name="Prilozi"
                  handleClick={() => toggleSidebarHandler()}
                />
              </div>
              <div className="flex flex-col justify-start items-end gap-4">
                <AsideItem
                  href="/menu/#vege-kutak"
                  name="Vege Kutak"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#domaci-kolac"
                  name="Domaći Kolač"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#domace-rakije"
                  name="Domaće Rakije"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#sokolove-rakije"
                  name="Sokolove Rakije"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#pica"
                  name="Pića"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#whiskey"
                  name="Whiskey"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#zestoka-pica"
                  name="Žestoka Pića"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#topli-napici"
                  name="Topli Napici"
                  handleClick={() => toggleSidebarHandler()}
                />
                <AsideItem
                  href="/menu/#bezalkoholna-pica"
                  name="Bezalkoholna Pića"
                  handleClick={() => toggleSidebarHandler()}
                />
              </div>
            </div>
            <div className="m-auto flex justify-between items-center w-[20%] mb-10 md:w-[40%] md:mb-3">
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
            <div className="text-secondary-100 text-center py-10 w-[80vw] m-auto md:text-sm md:py-4">
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
  const handleClickInternal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(href.indexOf("#") + 1); // Extract the section ID from href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const { top, height } = targetElement.getBoundingClientRect();
      const offset =
        top + window.pageYOffset - (window.innerHeight - height) / 2;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      handleClick();
    }
  };

  return (
    <li className="text-primary text-xl md:text-sm">
      <a href={href} onClick={handleClickInternal}>
        {name}
      </a>
    </li>
  );
};

export default Navbar;
