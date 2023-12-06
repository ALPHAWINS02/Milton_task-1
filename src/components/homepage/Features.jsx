import React from "react";
import Title from "../ui/buttons/Title";
import HeadText from "../ui/headings/HeadText";
import FeatureSection1 from "./FeatureSection1";
import FeatureSection2 from "./FeatureSection2";
import FeatureSection3 from "./FeatureSection3";
import FeatureSection4 from "./FeatureSection4";

const Features = () => {
  return (
    <section className="bg-soapstone">
      <div className="flex flex-col">
        <div className="flex flex-col pt-52 pb-20 px-10">
          <Title text={"Our main features 🦸🏼"} />
          <HeadText text={"Discover your new superpowers"} />
        </div>
        {/* faq question and answers */}
        <div className="flex flex-col items-center justify-center gap-10 box-border">
          <FeatureSection1 />
          <FeatureSection2 />
          <FeatureSection3 />
          <FeatureSection4 />
        </div>
      </div>
    </section>
  );
};

export default Features;
