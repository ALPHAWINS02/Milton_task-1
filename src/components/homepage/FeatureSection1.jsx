import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Title from "../ui/buttons/Title";
import SmallHead from "../ui/headings/SmallHead";
import ParaText from "../ui/headings/ParaText";
import helloImgg from "../../assets/photos/f1.png";
import StatImg from "../../assets/photos/image3.png";

const FeatureSection1 = () => {
  const [ref, inView] = useInView();

  const statImgProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0%)" : "translateX(50%)",
  });

  return (
    <div className="flex items-center justify-center w-full lg:w-[1200px]">
      <div className="flex flex-col items-center lg:items-start gap-8">
        <Title text={"Seamless Scheduling"} bgClr="#fee9cb" />
        <SmallHead text={"Focus on what matters most for you"} />
        <ParaText
          text={
            "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks."
          }
        />

        <div className="flex flex-col items-center lg:flex-row lg:justify-start w-full" ref={ref}>
          <div className="flex gap-3 pt-14">
            <img src={helloImgg} alt="hello image" className="w-20 lg:w-24 xl:w-32" />
          </div>
          <div className="flex flex-col items-start p-4 bg-mine-shaft gap-3 h-min w-full lg:w-80 rounded-tl-lg rounded-r-lg text-left">
            <p className="font-bold leading-6 text-soapstone">
              I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need.
            </p>
            <p className="font-semibold text-boulder leading-4">
              Annie, Designer
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <animated.div style={statImgProps}>
          <img src={StatImg} alt="stati image" />
        </animated.div>
      </div>
    </div>
  );
};

export default FeatureSection1;
