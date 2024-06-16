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
      className="w-screen h-screen flex flex-col justify-center items-center relative py-32
        lg:h-auto
      "
      id="about"
    >
      <div className="w-[80vw]">
        <div className="w-[50vw] m-auto text-center md:w-[80vw]">
          <Title
            variants={titleVariant}
            initial="initial"
            whileInView="animate"
            className="text-primary md:text-3xl md:mb-3"
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
            Nudimo širok asortiman ukusnih jela i osvježavajućih pića, te
            pružamo mogućnost iznajmljivanja našeg prostora za sve vaše posebne
            trenutke. Uživajte u muzici uživo svakog petka i subote, a po
            potrebi i drugih dana za veće društvene skupove. Ne zaboravite
            rezervirati svoje mjesto na vrijeme i pridružite nam se u ugodnom
            ambijentu restorana Mala Bašta!
          </motion.p>
          <Button
            variant={ButtonVariant}
            initial="initial"
            whileInView="animate"
            custom={{ index: 1 }}
            className="mt-7"
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
            className="mt-14 mx-5"
          >
            Meni
          </ResetButton>
          <Button
            variant={ButtonVariant}
            initial="initial"
            whileInView="animate"
            custom={{ index: 3 }}
            className="mt-7"
            href="#location"
          >
            Lokacija
          </Button>
        </div>
        <div className="w-[70vw] grid grid-cols-4 gap-5 mt-24 m-auto lg:grid-cols-2 md:grid-cols-1">
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
            className="translate-y-8 lg:translate-y-0"
          />{" "}
          <AboutItem
            variants={articleVariants}
            initial="initial"
            whileInView="animate"
            custom={{ index: 3 }}
            icon="fa-solid fa-music"
            title="Muzika Uživo"
            description="Svaki petak i subotu možete uživati u muzici uživo nastupu našeg najboljeg benda."
            className="translate-y-8 lg:translate-y-0"
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
        <h3 className="text-primary text-xl mt-6 font-bold">{title}</h3>
        <p className="text-primary mt-4 leading-6">{description}</p>
      </div>
    </motion.article>
  );
};

export default About;
