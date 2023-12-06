import React from "react";
import Title from "../ui/buttons/Title";
import HeadText from "../ui/headings/HeadText";
import QnA from "./QnA";
import { FaQData } from "../../assets/data/FaQData";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col pt-52 pb-20 px-10">
        <Title text={"Relevant stuff, bla bla 📣"} />
        <HeadText text={"Frequently asked questions"} />
      </div>
      {/* faq question and answers */}
      <div className="flex max-w-4xl ">
        <QnA faqData={FaQData} />
      </div>
    </div>
  );
};

export default FAQ;
