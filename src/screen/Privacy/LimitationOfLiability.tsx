import React from "react";

const LimitationOfLiability = ({ data }: any) => {
  return (
    <div>
      <h1 className="text-[36px] font-bold  leading-[50px] xsm:text-10 mt-2 ">
        {data?.title}
      </h1>
      <p className="text-[18px]   leading-[50px] xsm:text-10">
        {data?.description}
      </p>
    </div>
  );
};

export default LimitationOfLiability;
