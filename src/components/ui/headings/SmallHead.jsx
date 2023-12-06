import React from "react";

const SmallHead = ({ text }) => {
  return (
    <div>
      <p className="text-[40px] font-extrabold text-left text-mine-shaft leading-[52px]">
        {text}
      </p>
    </div>
  );
};

export default SmallHead;
