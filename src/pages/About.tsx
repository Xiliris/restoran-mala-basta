import { FC } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import ResetButton from "../components/ResetButton";
import { Variants, motion } from "framer-motion";

const SplitVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "linear",
    },
  },
};

const titleVariant = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.3,
      type: "spring",
    },
  },
};

const textVariant = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      type: "spring",
    },
  },
};

interface ButtonVariantProps {
  index: number;
}

const ButtonVariant = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: ({ index }: ButtonVariantProps) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: index * 0.2,
      type: "spring",
    },
  }),
};

const articleVariants = {
  initial: {
    opacity: 0,
  },
  animate: ({ index }: ButtonVariantProps) => ({
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: index * 0.1,
      type: "spring",
    },
  }),
};

const About: FC = () => {
  return (
    <section
      className="w-screen h-auto flex flex-col justify-center items-center relative py-32
      min-h-screen
      "
      id="about"
    >
      <div className="w-[80vw]">
        <div className="w-[50vw] m-auto text-center md:w-[80vw]">
          <Title
            variants={titleVariant}
            initial="initial"
            whileInView="animate"
            className="text-primary md:text-3xl mb-4"
          >
            Dobrodošli u Malu Baštu
          </Title>
          <motion.div
            variants={SplitVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-row items-center justify-center mb-5 mx-20 overflow-hidden md:text-3xl md:mx-3"
          >
            <span className="py-[0.5px] flex-grow bg-primary "></span>
            <Title className="px-5 flex-grow-0">O nama</Title>
            <span className="py-[0.5px] flex-grow bg-primary "></span>
          </motion.div>
          <motion.p
            variants={textVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="text-xl text-primary md:text-md"
            style={{ lineHeight: "1.5rem" }}
          >
            Restoran Mala Bašta je mali raj u Sarajevu. Bašta našeg restorana je
            sa vama dijelila najbitnije momente u vašim porodicama. Zajedno smo
            se smijali, pjevali, plakali... Zajedno smo ostvarili lijepe priče i
            još ljepše uspomene. Osnovan 2005. godine kao "The Family Club",
            Mala bašta od 2021. godine se kruniše novim vlasnikom, poznatim
            sarajevskim kuharom, započinjući jednu novu gastronomsku priču čiji
            je jedini cilj zadovoljan posjetilac.
          </motion.p>
          <div className="mt-9 flex justify-center items-center gap-5 md:gap-3">
            <Button
              variant={ButtonVariant}
              initial="initial"
              whileInView="animate"
              custom={{ index: 1 }}
              className=""
              href="#contact"
            >
              Kontakt
            </Button>
            <ResetButton
              href="/menu"
              variant={ButtonVariant}
              initial="initial"
              whileInView="animate"
              custom={{ index: 2 }}
              className=""
            >
              Meni
            </ResetButton>
            <Button
              variant={ButtonVariant}
              initial="initial"
              whileInView="animate"
              custom={{ index: 3 }}
              className=""
              href="#location"
            >
              Lokacija
            </Button>
          </div>
        </div>
        <div className="w-[70vw] grid grid-cols-4 gap-5 mt-24 m-auto md:grid-cols-1 xl:grid-cols-2">
          <AboutItem
            variants={articleVariants}
            initial="initial"
            whileInView="animate"
            custom={{ index: 1 }}
            icon="fa-solid fa-bowl-food"
            title="Ukusna Jela"
            description="Naši kuhari strastveno pripremaju izvanredno ukusnu hranu, pažljivo birajući najkvalitetnije sastojke."
          />
          <AboutItem
            variants={articleVariants}
            initial="initial"
            whileInView="animate"
            custom={{ index: 2 }}
            icon="fa-solid fa-hand-holding-droplet"
            title="Najbolja Usluga"
            description="Naš tim vrhunskih stručnjaka osiguraće vam brzu i visokokvalitetnu uslugu."
            className="translate-y-8 xl:translate-y-0"
          />{" "}
          <AboutItem
            variants={articleVariants}
            initial="initial"
            whileInView="animate"
            custom={{ index: 3 }}
            icon="fa-solid fa-music"
            title="Muzika Uživo"
            description="Svaki petak i subotu možete uživati u muzici uživo nastupu našeg najboljeg benda."
            className="translate-y-8 xl:translate-y-0"
          />
          <AboutItem
            variants={articleVariants}
            initial="initial"
            whileInView="animate"
            custom={{ index: 4 }}
            icon="fa-solid fa-smoking"
            title="Zona za Pušače i Nepušače"
            description="Prostor posebno prilagođen za pušače i nepušače, osiguravajući udobnost i zadovoljstvo svim gostima."
          />
        </div>
      </div>
      <div className="split-svg">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

interface AboutItemProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
  variants?: Variants;
  initial?: string;
  whileInView?: string;
  custom?: object;
}

const AboutItem: FC<AboutItemProps> = ({
  icon,
  title,
  description,
  className,
  variants = {},
  initial = "initial",
  whileInView = "animate",
  custom = {},
}) => {
  return (
    <motion.article
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      custom={custom}
      viewport={{ once: true, amount: 0.5 }}
      className={`flex justify-start items-center flex-col text-center bg-default-200 p-4 rounded-3xl ${className} shadow-md min-h-72`}
    >
      <div className="border-2 border-emphasis p-4 rounded-xl h-[100%] flex flex-col justify-center items-center">
        <i className={`text-5xl text-emphasis ${icon}`}></i>
        <h2 className="text-primary text-xl mt-6 font-bold">{title}</h2>
        <p className="text-primary mt-4 leading-6">{description}</p>
      </div>
    </motion.article>
  );
};

export default About;
