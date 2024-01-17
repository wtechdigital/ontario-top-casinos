import React from "react";

const GeneralInformation = ({ data }: any) => {
  return (
    <div>
      <h1 className="text-[36px] font-bold  leading-[50px] xsm:text-10 mt-2  ">
        {data?.title}
      </h1>

      <p className="text-[18px]  leading-[50px] xsm:text-10  ">
        {data?.Introduction}
      </p>

      <p
        className="text-[18px]  leading-[50px] xsm:text-10"
        dangerouslySetInnerHTML={{ __html: data?.Purpose }}
      ></p>

      <p className="text-[18px]  leading-[50px] xsm:text-10  ">{data?.Scope}</p>
      <p className="text-[18px]  leading-[50px] xsm:text-10  ">
        {data?.Details}
      </p>
      <ul className="grid !gap-y-[16px] text-base mt-10  ">
        {data?.Interactions?.map((point: any, index: number) => (
          <div key={index} className="flex items-start ">
            <span className="text-[18px] pb-1">{point}</span>
          </div>
        ))}
      </ul>
      <p className="text-[18px]  leading-[50px] xsm:text-10  ">
        {data?.AdvertisingDisclosure}
      </p>
      <p className="text-[18px]  leading-[50px] xsm:text-10  ">
        {data?.RelationToOtherNotices}
      </p>
    </div>
  );
};

export default GeneralInformation;
