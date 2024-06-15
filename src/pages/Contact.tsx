import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import Title from "../components/Title";
import Split from "../components/Split";

const SplitVariant = {
  initial: {
    width: "0",
  },
  animate: {
    width: "100%",
    transition: {
      duration: 0.5,
      delay: 0.5,
      type: "linear",
    },
  },
};

const titleVariant = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      type: "spring",
    },
  },
};

const itemAnimation = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: ({ index }: { index: number }) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: index * 0.1 + 1.5,
      type: "spring",
    },
  }),
};

const Contact: FC = () => {
  return (
    <section className="flex w-screen mt-20">
      <div
        className="w-[80vw] h-[50vh] m-auto lg:h-[100%] flex flex-col justify-center items-center"
        id="contact"
      >
        <Title
          variants={titleVariant}
          initial="initial"
          whileInView="animate"
          className="text-center"
        >
          Kontakt
        </Title>
        <Split
          variants={SplitVariant}
          initial="initial"
          whileInView="animate"
          icon={true}
          className="mt-5 mb-5"
        />
        <div className="w-[100%] flex justify-between lg:grid lg:grid-cols-2 lg:gap-5 md:grid-cols-1">
          <ContactContainer>
            <Title
              variants={titleVariant}
              initial="initial"
              whileInView="animate"
              className="text-left mb-4"
            >
              Restoran
            </Title>
            <RestoranItem
              title="Adresa"
              name="Bugojanska 5, Sarajevo"
              index={1}
            />
            <RestoranItem title="Telefon" name="+387 63 711 520" index={2} />
          </ContactContainer>
          <ContactContainer>
            <Title
              variants={titleVariant}
              initial="initial"
              whileInView="animate"
              className="text-left mb-4"
            >
              Radno Vrijeme
            </Title>
            <RadnoVrijeme dan="PON" vrijeme="08:00 - 23:00" index={1} />
            <RadnoVrijeme dan="UTO" vrijeme="08:00 - 23:00" index={2} />
            <RadnoVrijeme dan="SRI" vrijeme="08:00 - 23:00" index={3} />
            <RadnoVrijeme dan="CET" vrijeme="08:00 - 23:00" index={4} />
            <RadnoVrijeme dan="PET" vrijeme="12:00 - 02:00" index={5} />
            <RadnoVrijeme dan="SUB" vrijeme="14:00 - 02:00" index={6} />
            <RadnoVrijeme dan="NED" vrijeme="Zatvoreno" index={7} />
          </ContactContainer>
          <ContactContainer>
            <Title
              variants={titleVariant}
              initial="initial"
              whileInView="animate"
              className="text-left mb-4"
            >
              Drustvene Mreže
            </Title>
            <KontaktItem
              href="https://www.facebook.com/restoranMalaBasta?locale=hr_HR"
              index={1}
            >
              Facebook
            </KontaktItem>
            <KontaktItem
              href="https://www.instagram.com/official.restoranmalabasta/"
              index={2}
            >
              Instagram
            </KontaktItem>
            <KontaktItem
              href="https://www.tripadvisor.com/Restaurant_Review-g294450-d8784750-Reviews-Mala_Basta-Sarajevo_Sarajevo_Canton_Federation_of_Bosnia_and_Herzegovina.html"
              index={3}
            >
              Tripadvisor
            </KontaktItem>
          </ContactContainer>
          <ContactContainer>
            <Title
              variants={titleVariant}
              initial="initial"
              whileInView="animate"
              className="text-left mb-4"
            >
              Meni
            </Title>
            <KontaktItem
              index={1}
              href="/menu/?id=hladna-predjela"
              navigate={true}
            >
              Hladna Predjela
            </KontaktItem>
            <KontaktItem
              index={2}
              href="/menu/?id=jela-sa-zara"
              navigate={true}
            >
              Jela sa Žara
            </KontaktItem>
            <KontaktItem index={3} href="/menu/?id=vege-kutak" navigate={true}>
              Vege Kutak
            </KontaktItem>
            <KontaktItem
              index={4}
              href="/menu/?id=specijalitet-kuce"
              navigate={true}
            >
              Specijalitet Kuće
            </KontaktItem>
            <KontaktItem index={5} href="/menu/?id=salata" navigate={true}>
              Salata
            </KontaktItem>
            <KontaktItem index={6} href="/menu" navigate={true}>
              Pogledajte još
            </KontaktItem>
          </ContactContainer>
        </div>
        <Split
          variants={SplitVariant}
          initial="initial"
          whileInView="animate"
          className="mt-5 mb-1"
        />
      </div>
    </section>
  );
};
interface ContactContainerProps {
  children: ReactNode;
}

interface RestoranItemProps {
  title: string;
  name: string;
  index?: number;
}

interface RadnoVrijemeProps {
  dan: string;
  vrijeme: string;
  index?: number;
}

interface KontaktItemProps {
  children: ReactNode;
  href?: string;
  index?: number;
  navigate?: boolean;
}

const ContactContainer: FC<ContactContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-start items-start h-[100%] text-lg md:mb-10">
      {children}
    </div>
  );
};

const RestoranItem: FC<RestoranItemProps> = ({ title, name, index }) => {
  return (
    <motion.div
      variants={itemAnimation}
      initial="initial"
      whileInView="animate"
      custom={{ index }}
      viewport={{ once: true, amount: 0.5 }}
      className="mb-3"
    >
      <p className="text-primary font-bold mb-1">{title}</p>
      <p className="text-primary">{name}</p>
    </motion.div>
  );
};

const RadnoVrijeme: FC<RadnoVrijemeProps> = ({ dan, vrijeme, index }) => {
  return (
    <motion.div
      variants={itemAnimation}
      initial="initial"
      whileInView="animate"
      custom={{ index }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex justify-between items-center mb-3 w-[100%]"
    >
      <p className="text-primary font-bold">{dan}</p>
      <p className="text-primary">{vrijeme}</p>
    </motion.div>
  );
};

const KontaktItem: FC<KontaktItemProps> = ({
  href,
  children,
  index,
  navigate,
}) => {
  return (
    <motion.a
      variants={itemAnimation}
      initial="initial"
      whileInView="animate"
      custom={{ index }}
      viewport={{ once: true, amount: 0.5 }}
      href={href}
      target={navigate ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="mb-3 cursor-pointer"
    >
      <p className="text-primary group">
        <i className="fa-solid fa-angle-right text-emphasis group-hover:text-primary transition duration-300"></i>{" "}
        {children}
      </p>
    </motion.a>
  );
};

export default Contact;
