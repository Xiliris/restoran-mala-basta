import { FC } from "react";
import HeroVideo from "../assets/hero.mp4";

const Video: FC = () => {
  return (
    <video
      autoPlay
      muted
      loop
      className="absolute z-[-100] w-screen h-screen object-cover brightness-[0.4] top-0 left-0"
    >
      <source src={HeroVideo} type="video/mp4" />
    </video>
  );
};

export default Video;
