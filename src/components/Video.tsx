import { FC, useEffect, useState } from "react";
import HeroVideo from "../assets/hero.mp4";
import FallbackImage from "../assets/fallback.jpg";

const Video: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.createElement("video");
    videoElement.src = HeroVideo;
    videoElement.onloadeddata = () => {
      setIsLoaded(true);
    };
  }, []);

  return isLoaded ? (
    <video
      autoPlay
      muted
      loop
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover z-[-100] brightness-50"
    >
      <source src={HeroVideo} type="video/mp4" />
    </video>
  ) : (
    <img
      src={FallbackImage}
      alt="Fallback"
      className="absolute inset-0 w-full h-full object-cover z-[-100]"
    />
  );
};

export default Video;
