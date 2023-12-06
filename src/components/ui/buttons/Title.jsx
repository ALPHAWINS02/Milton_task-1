import React from "react";

const Title = ({ text, bgClr = "#fee9cb" }) => {
  return (
    <div>
      <button
        className={`text-base font-bold rounded-3xl px-4 py-2 h-auto w-auto box-border bg-octothorpe-blue text-mine-shaft leading-5 bg-[${bgClr}] `}
      >
        {text}
      </button>
    </div>
  );
};

export default Title;
