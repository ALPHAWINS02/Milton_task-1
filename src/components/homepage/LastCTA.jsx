import React from "react";
import HeadText from "../ui/headings/HeadText";
import Title from "../ui/buttons/Title";
import CtaBtn from "../ui/buttons/CtaBtn";
import helloImg from "../../assets/photos/f2.png";

const LastCTA = () => {
  return (
    <section className="bg-soapstone">
      <div className="flex flex-col justify-center items-center pb-32 px-10 ">
        <div className="flex flex-col gap-2 h-min pt-52 pb-10 px-10">
          <Title text={"Last call Baby! 🚀"} />
          <HeadText text={"Ready to start?"} />
        </div>
        <div className="flex flex-col gap-8 justify-center items-center ">
          <p className="text-xl font-medium text-slate leading-8 ">
            Here is your last chance to explain how cool your app is. Focus{" "}
            <br /> on the benefits for your users, not on the features.
          </p>
          <CtaBtn text="Get started, it's free" />
          <div className="flex justify-start w-full">
            <div className="flex gap-3 pt-14 w-20">
              <img src={helloImg} alt="hello image" />
            </div>
            <div className="flex flex-col items-start p-4 bg-[#fee9cb] gap-3 h-min w-min rounded-tl-lg rounded-r-lg ">
              <p className="flex items-start w-80 flex-wrap font-bold leading-6 text-mine-shaft-2">
                I never missed a call again, the AI-drivenfeature is a game
                changer for me!{" "}
              </p>

              <p className="font-semibold text-boulder leading-4">
                Adam, Solo founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastCTA;
