import React, { useState } from "react";

const QnA = ({ faqData }) => {
  const [openedQuestion, setOpenedQuestion] = useState(null);

  const toggleQuestion = (id) => {
    if (openedQuestion === id) {
      setOpenedQuestion(null);
    } else {
      setOpenedQuestion(id);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      {faqData.map((item) => (
        <div key={item.id} className="mb-4 sm:mb-8 p-2 rounded-2xl bg-octothorpe-blue">
          <button
            onClick={() => toggleQuestion(item.id)}
            className="flex justify-between items-center w-full p-4 sm:p-6 rounded-md focus:outline-none"
          >
            <p className="font-bold text-lg sm:text-xl leading-6 text-[#2d2d2d]">
              {item.question}
            </p>
            <svg
              className={`w-4 h-4 sm:w-5 sm:h-5 font-bold text-lg sm:text-xl leading-6 text-[#2d2d2d] transition-transform ${
                openedQuestion === item.id ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openedQuestion === item.id && (
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 rounded-b-md">
              <p className="text-[#6b6b78] text-sm sm:text-base font-medium text-left leading-6">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QnA;
