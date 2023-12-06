import React from "react";

const HeadText = ({ text }) => {
  return (
    <div>
      <p className="text-[56px] font-extrabold text-mine-shaft leading-[65px]">
        {text}
      </p>
    </div>
  );
};

export default HeadText;
