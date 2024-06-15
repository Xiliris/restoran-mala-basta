import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
  id: string;
  className?: string | null;
  background?: string | null;
}

const Layout: FC<LayoutProps> = ({ children, className, background, id }) => {
  return (
    <section
      id={id}
      className={`w-screen h-screen flex justify-center items-center ${background}`}
    >
      <div
        className={`w-[80vw] m-auto flex justify-center items-center h-screen ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Layout;
