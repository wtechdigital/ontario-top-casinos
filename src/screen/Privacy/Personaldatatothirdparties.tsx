import React from "react";

const Personaldatatothirdparties = ({ data }: any) => {
  return (
    <div>
      <h1 className="text-[48px] font-bold leading-[52px] xsm:text-10">
        {data?.title}
      </h1>
      <ul className="">
        {data?.description?.map((point: any, index: number) => (
          <div key={index} className="flex items-start ">
            <span className="  pb-1">{point}</span>
          </div>
        ))}
      </ul>
      <p className="  xsm:text-10  ">{data?.transfer}</p>
      <ul className="">
        {data?.transferDetails?.map((point: any, index: number) => (
          <div key={index} className="flex items-start ">
            <span className="  pb-1">{point}</span>
          </div>
        ))}
      </ul>
      <ul className="text-base mt-2">
        {data?.restDetails?.map((point: any, index: number) => (
          <div key={index} className="flex items-start ">
            <span className="pb-1 mr-1">{index+1}.</span>
            <span className="pb-1">{point}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Personaldatatothirdparties;
