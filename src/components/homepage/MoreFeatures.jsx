import React from "react";
import Title from "../ui/buttons/Title";
import HeadText from "../ui/headings/HeadText";
import FeatureCard from "../ui/cards/FeatureCard";
import FeaturesData from "../../assets/data/FeaturesData";

const MoreFeatures = () => {
  return (
    <section className="bg-soapstone">
      <div className="flex flex-col">
        <div className="flex flex-col pt-52 pb-20 px-10">
          <Title text={"And so much more... 💼"} />
          <HeadText text={"Our features to make your life easier"} />
        </div>
        {/* faq question and answers */}
        <div className="flex flex-wrap justify-center items-center gap-4 gap-y-16">
          {FeaturesData.map((val, index) => (
            <FeatureCard
              imgSrc={val.imgSrc}
              headText={val.headText}
              headTextBg={val.headTextBg}
              paraText={val.paraText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreFeatures;
