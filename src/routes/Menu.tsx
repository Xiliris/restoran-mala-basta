import { FC, ReactNode, useEffect } from "react";
import Navbar from "../components/NavbarComponent";
import Title from "../components/Title";
import Split from "../components/Split";
import Footer from "../pages/Footer";

const Menu: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="w-screen h-auto flex flex-col justify-start items-center">
      <Navbar />
      <div className="grid grid-cols-2 mx-auto gap-x-[10vw] xl:grid-cols-1">
        <MenuContainer
          title="Hladna Predjela"
          className="mt-44"
          id="hladna-predjela"
        >
          <MenuItem name="Carpaccio sa Lososom" price={20} info="100g" />
          <MenuItem name="Tuna" price={30} info="280g" />
          <MenuItem name="Carpaccio sa biftekom" price={20} info="100g" />
          <MenuItem name="Suho meso-prva klasa" price={10} info="100g" />
          <MenuItem name="Sudžuk/kulen" price={7} info="100g" />
          <MenuItem
            name="Livanjski sir u maslinovom ulju"
            price={10}
            info="100g"
          />
          <MenuItem name="Gorgonzola" price={8} info="100g" />
          <MenuItem name="Mozarela" price={8} info="100g" />
          <MenuItem name="Travnički sir" price={5} info="100g" />
          <MenuItem name="Hladna plata Mala bašta" price={30} info="350g" />
          <MenuItem name="Plata tri vrste sira" price={25} info="350g" />
        </MenuContainer>

        <MenuContainer
          title="Topla Predjela"
          className="mt-44"
          id="topla-predjela"
        >
          <MenuItem name="Uštipci sa kajmakom" price={7} />
          <MenuItem name="Uštipci od heljde sa kajmakom" price={8} />
          <MenuItem name="Bukovače na rukoli" price={12} />
        </MenuContainer>

        <MenuContainer title="Čorbe" className="mt-44" id="corbe">
          <MenuItem name="Dnevna čorba" price={4} />
          <MenuItem name="Teleća čorba" price={6} />
          <MenuItem name="Begova čorba" price={5} />
          <MenuItem name="Špinat krem čorba" price={7} />
          <MenuItem name="Paradajz čorba" price={5} />
        </MenuContainer>

        <MenuContainer
          title="Specijaliteti Kuće"
          className="mt-44"
          id="specijalitet-kuce"
        >
          <MenuItem name="Teletina ispod sača" price={18} info="200g" />
          <MenuItem name="Jagnjetina (po narudžbi)" price={45} info="1kg" />
        </MenuContainer>

        <MenuContainer
          title="Dnevna Ponuda"
          className="mt-44"
          id="dnevna-ponuda"
        >
          <MenuItem name="Gulaš" price={11} />
          <MenuItem name="Sitni ćevap" price={10} />
          <MenuItem name="Dinstana teletina sa povrćem" price={12} />
          <MenuItem name="Mućkalica" price={14} />
        </MenuContainer>

        <MenuContainer title="Jela sa Žara" className="mt-44" id="jela-sa-zara">
          <MenuItem name="Pileći fileti sa žara" price={12} />
          <MenuItem name="Pureća šnicla" price={19} />
          <MenuItem name="Teleći kotleti" price={33} />
          <MenuItem name="Biftek sa žara" price={19} />
          <MenuItem name="Biftek ala Dado" price={22} />
          <MenuItem name="Pljeskavica" price={12} />
          <MenuItem name="Kiseli kupus" price={5} />
          <MenuItem
            name="Biftek na užarenoj ploči sa pekarskim krompirom"
            price={32}
          />
          <MenuItem name="Tagliata Grano Padano na rukoli" price={35} />
          <MenuItem name="Teleća koljenica" price={60} />
          <MenuItem name="Biftek u Gorgonzola sosu" price={35} />
          <MenuItem name="Green Pepper biftek" price={35} />
          <MenuItem name="Ramstek ala Dado" price={25} />
          <MenuItem name="Biftek sa začinskim biljem" price={33} />
        </MenuContainer>

        <MenuContainer title="Salate" className="mt-44" id="salata">
          <MenuItem name="Šopska salata" price={7} />
          <MenuItem name="Sezonska salata" price={4} />
          <MenuItem name="Pileća salata" price={12} />
          <MenuItem name="Tuna salata" price={12} />
          <MenuItem name="Salata od hobotnice" price={20} />
          <MenuItem name="Salata Frutti di Mare" price={15} />
          <MenuItem name="Salata Caprese" price={12} />
          <MenuItem name="Cherry-Rukola salata" price={6} />
        </MenuContainer>

        <MenuContainer title="Prilozi" className="mt-44" id="prilozi">
          <MenuItem name="Riža" price={2} />
          <MenuItem name="Pekarski krompir" price={3} />
          <MenuItem name="Pomfrit" price={3} />
          <MenuItem name="Kuhano povrće" price={4} />
          <MenuItem name="Sjenička paprika" price={6} />
          <MenuItem name="Pečena crvena paprika" price={5} />
          <MenuItem name="Kajmak" price={2} />
        </MenuContainer>

        <MenuContainer
          title="Vegetarijanska Kućica"
          className="mt-44"
          id="vege-kutak"
        >
          <MenuItem name="Grilovano povrće" price={12} />
          <MenuItem name="Šampinjoni na žaru" price={10} />
          <MenuItem name="Sojini medaljoni" price={10} />
          <MenuItem name="Vegetarijanska tikvica ala šef" price={17} />
        </MenuContainer>

        <MenuContainer title="Deserti" className="mt-44" id="domaci-kolac">
          <MenuItem name="Domaći kolač" price={3} />
          <MenuItem name="Torta" price={4} />
        </MenuContainer>

        <MenuContainer
          title="Domaće Rakije"
          className="mt-44"
          id="domace-rakije"
        >
          <MenuItem name="Šljiva" price={3} info="(0.03)" />
          <MenuItem name="Kruška" price={3} info="(0.03)" />
          <MenuItem name="Jabuka" price={3} info="(0.03)" />
          <MenuItem name="Loza" price={3} info="(0.03)" />
          <MenuItem name="Travarica" price={3} info="(0.03)" />
          <MenuItem name="Višnjevača" price={4} info="(0.03)" />
          <MenuItem name="Dunja" price={3.5} info="(0.03)" />
          <MenuItem name="Kajsija" price={3.5} info="(0.03)" />
          <MenuItem name="Orahovača" price={4} info="(0.03)" />
          <MenuItem name="Viljamovka" price={5} info="(0.03)" />
        </MenuContainer>

        <MenuContainer
          title="Sokolove Rakije"
          className="mt-44"
          id="sokolove-rakije"
        >
          <MenuItem name="Šljiva" price={5} info="(0.03)" />
          <MenuItem name="Dunja" price={5} info="(0.03)" />
          <MenuItem name="Kajsija" price={5} info="(0.03)" />
          <MenuItem name="Orahovača" price={5} info="(0.03)" />
          <MenuItem name="Viljamovka" price={5} info="(0.03)" />
        </MenuContainer>

        <MenuContainer title="Pića" className="mt-44" id="pica">
          <MenuItem name="Karlovačko" price={3.5} info="(0.33)" />
          <MenuItem name="Laško" price={3} info="(0.33)" />
          <MenuItem name="Laško malt" price={5} info="(0.33)" />
          <MenuItem name="Heineken" price={5} info="(0.40)" />
          <MenuItem name="Sarajevsko premium" price={5} info="(0.33)" />
          <MenuItem name="Heineken bezalkoholno" price={5} info="(0.33)" />
          <MenuItem name="Somersby" price={5} info="(0.33)" />
          <MenuItem name="Radler" price={4} info="(0.33)" />
        </MenuContainer>

        <MenuContainer title="Whiskey" className="mt-44" id="whiskey">
          <MenuItem name="Ballantines" price={5} info="(0.03)" />
          <MenuItem name="Johny Walker" price={6} info="(0.03)" />
          <MenuItem name="Johny Black" price={7} info="(0.03)" />
          <MenuItem name="Chivas" price={8} info="(0.03)" />
          <MenuItem name="Jack Daniel's" price={5} info="(0.03)" />
        </MenuContainer>

        <MenuContainer title="Žestoka Pića" className="mt-44" id="zestoka-pica">
          <MenuItem name="Vodka" price={4} info="(0.03)" />
          <MenuItem name="Gin" price={4} info="(0.03)" />
          <MenuItem name="Pelinkovac" price={3} info="(0.03)" />
          <MenuItem name="Jägermeister" price={4} info="(0.03)" />
          <MenuItem name="Tequila" price={4} info="(0.03)" />
          <MenuItem name="Lavov" price={3} info="(0.03)" />
          <MenuItem name="Stock" price={3.5} info="(0.03)" />
          <MenuItem name="Baileys" price={5} info="(0.03)" />
          <MenuItem name="Campari" price={5} info="(0.03)" />
        </MenuContainer>

        <MenuContainer title="Topli Napici" className="mt-44" id="topli-napici">
          <MenuItem name="Čaj (limun, med)" price={2.5} />
          <MenuItem name="Kafa" price={2} />
          <MenuItem name="Kafa sa mlijekom (mala)" price={2.5} />
          <MenuItem name="Kafa sa mlijekom (velika)" price={3} />
          <MenuItem name="Cappuccino" price={3} />
          <MenuItem name="Ness sa okusima" price={3.5} />
          <MenuItem name="Topla čokolada" price={4} />
        </MenuContainer>

        <MenuContainer
          title="Bezalkoholna Pića"
          className="mt-44"
          id="bezalkoholna-pica"
        >
          <MenuItem name="Prirodni sokovi" price={3.5} />
          <MenuItem name="Gazirani sokovi" price={3.5} />
          <MenuItem name="Limunada" price={3.5} />
          <MenuItem name="Orangina" price={4} />
          <MenuItem name="Cijeđena narandža" price={5} />
          <MenuItem name="Kisela voda" price={2.5} />
          <MenuItem name="Kisela voda (1.00)" price={7} />
          <MenuItem name="Sensation" price={2.5} />
          <MenuItem name="Prirodna voda" price={2.5} />
          <MenuItem name="Prirodna voda (0.75)" price={4} />
          <MenuItem name="Red Bull" price={5} />
        </MenuContainer>
      </div>
      <Split className="mt-32" icon={true} />
      <Footer />
    </main>
  );
};

interface MenuContainerProps {
  title: string;
  className?: string;
  id?: string;
  children: ReactNode;
}

interface MenuItemProps {
  name: string;
  price: number;
  info?: string;
}

const MenuContainer: FC<MenuContainerProps> = ({
  title,
  children,
  className,
  id,
}) => {
  return (
    <article className={`w-[35vw] xl:w-[90vw] ${className}`} id={id}>
      <Title>{title}</Title>
      <Split className="my-5" />
      {children}
    </article>
  );
};

const MenuItem: FC<MenuItemProps> = ({ name, price, info }) => {
  return (
    <div className="flex justify-between items-center my-2">
      <p className={`text-primary text-md md:text-md w-[50%]`}>{name}</p>
      <div className="flex justify-end items-center w-[40%]">
        {info && (
          <p className="text-primary text-md mr-auto leading-5 md:text-md md:leading-relaxed">
            {info}
          </p>
        )}
        <p className="text-primary text-md md:text-sm">{price.toFixed(2)} KM</p>
      </div>
    </div>
  );
};

export default Menu;
