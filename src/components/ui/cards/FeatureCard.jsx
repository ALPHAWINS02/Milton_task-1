import React from "react";
import Title from "../buttons/Title";
import imgae from "../../../assets/photos/image2.png";

const FeatureCard = ({ imgSrc, headText, headTextBg, paraText }) => {
  return (
    <div className="flex flex-col items-start content-start  h-min w-min  box-border gap-6 ">
      {/* img */}
      <div className="flex justify-center items-center h-[265px] w-[387px] rounded-2xl bg-[#f1f2f4]  ">
        <div className="rounded-2xl max-w-[70%] max-h-[70%]">
          <img
          
            src={imgSrc }
            alt="Image src"
            className=" w-60 h-40 object-contain object-center flex justify-center items-center  "
          />
        </div>
      </div>
      {/* headtext */}
      <div className="flex content-start ">
        <Title text={headText} bgClr={headTextBg} />
      </div>
      {/* paragraph */}
      {console.log(imgSrc, headTextBg)}
      <div className="flex content-start">
        <p className="text-base font-medium text-slate leading-6 text-left ">
          {paraText}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
