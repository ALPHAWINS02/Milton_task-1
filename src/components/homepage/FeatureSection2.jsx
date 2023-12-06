import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Title from "../ui/buttons/Title";
import SmallHead from "../ui/headings/SmallHead";
import ParaText from "../ui/headings/ParaText";
import helloImg from "../../assets/photos/f2.png";
import StatImg from "../../assets/photos/image2.png";

const FeatureSection2 = () => {
  const [ref, inView] = useInView();

  const statImgProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0%)" : "translateX(-50%)",
  });

  return (
    <div className="flex items-center justify-center w-[1200px] gap-5">
      <div className="flex justify-center items-center">
        <animated.div style={statImgProps}>
          <img src={StatImg} alt="stati image" ref={ref} />
        </animated.div>
      </div>
      <div className="flex flex-col items-start gap-8">
        <Title text={"Seamless Scheduling"} bgClr="#cceafd" />
        <SmallHead text={"Never miss an important deadline or event again"} />
        <ParaText
          text={
            "Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free."
          }
        />

        <div className="flex justify-end w-full">
          <div className="flex gap-3 pt-14 w-20">
            <img src={helloImg} alt="hello image" />
          </div>
          <div className="flex flex-col items-start p-4 bg-mine-shaft gap-3 h-min w-min rounded-tl-lg rounded-r-lg text-left">
            <p className="flex items-start w-80 flex-wrap font-bold leading-6 text-soapstone">
              I've tried a lot of calendar apps, but this one is by far the
              best! It's so intuitive and customizable, and it has all the
              features I need.
            </p>

            <p className="font-semibold text-boulder leading-4 text-left">
              Annie, Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection2;
