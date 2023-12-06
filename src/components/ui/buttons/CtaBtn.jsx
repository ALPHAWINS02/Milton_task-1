import React from "react";

const CtaBtn = ({ text }) => {
  return (
    <div>
      <button className="text-base font-bold leading-6 px-8 py-4 rounded-xl bg-mine-shaft text-soapstone">
        {text}
      </button>
    </div>
  );
};

export default CtaBtn;
