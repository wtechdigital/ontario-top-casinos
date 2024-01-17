import React from "react";

const GeneralInformation = ({ data }: any) => {
  return (
    <div>
      <h1 className="text-[48px] font-bold leading-[52px] xsm:text-10">
        {data?.title}
      </h1>

      <h1 className="mt-3">{data?.Introduction}</h1>

      <p
        className=""
        dangerouslySetInnerHTML={{ __html: data?.Purpose }}
      ></p>

      <p className="">{data?.Scope}</p>
      <p className="">{data?.Details}</p>
      <ul className="">
        {data?.Interactions?.map((point: any, index: number) => (
          <div key={index} className="flex items-start ">
            <span className="pb-1 mr-1">{index+1}. {point}</span>
          </div>
        ))}
      </ul>
      <p className="">{data?.AdvertisingDisclosure}</p>
      <p className="">{data?.RelationToOtherNotices}</p>
    </div>
  );
};

export default GeneralInformation;
