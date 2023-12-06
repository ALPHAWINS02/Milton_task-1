import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Title from "../ui/buttons/Title";
import SmallHead from "../ui/headings/SmallHead";
import ParaText from "../ui/headings/ParaText";
import helloImg from "../../assets/photos/f3.png";
import StatImg from "../../assets/photos/image8.png";

const FeatureSection3 = () => {
  const [ref, inView] = useInView();

  const statImgProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0%)" : "translateX(50%)",
  });

  return (
    <div className="flex items-center justify-center w-[1200px]">
      <div className="flex flex-col items-start gap-8">
        <Title text={"Seamless Scheduling"} bgClr="#fee9cb" />
        <SmallHead text={"Focus on what matters most for you"} />
        <ParaText
          text={
            "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks."
          }
        />

        <div className="flex justify-start w-full" ref={ref}>
          <div className="flex gap-3 pt-14 w-20">
            <img src={helloImg} alt="hello image" />
          </div>
          <div className="flex flex-col items-start p-4 bg-mine-shaft gap-3 h-min w-min rounded-tl-lg rounded-r-lg">
            <p className="flex items-start w-80 flex-wrap font-bold leading-6 text-soapstone text-left">
              I've tried a lot of calendar apps, but this one is by far the
              best! It's so intuitive and customizable, and it has all the
              features I need.
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

export default FeatureSection3;
