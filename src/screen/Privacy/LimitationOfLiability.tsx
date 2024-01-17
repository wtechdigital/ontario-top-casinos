import React from "react";

const LimitationOfLiability = ({ data }: any) => {
  return (
    <div>
      <h1 className="text-[48px] font-bold leading-[52px] xsm:text-10">
        {data?.title}
      </h1>
      <p className="xsm:text-10">
        {data?.description}
      </p>
    </div>
  );
};

export default LimitationOfLiability;
