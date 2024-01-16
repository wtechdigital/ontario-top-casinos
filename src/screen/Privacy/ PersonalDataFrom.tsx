import React from "react";

const PersonalDataFrom = ({ data }: any) => {
  return (
    <div>
      <h1 className="text-[36px] font-bold leading-[52px] xsm:text-10  ">
        {data?.title}
      </h1>

      <p className="text-[22px] leading-[52px] xsm:text-10" dangerouslySetInnerHTML={{ __html: data?.cases }}>
      </p>

      <ul className="grid !gap-y-[16px] text-base mt-2">
        {data?.DirectSources?.map((point: any, index: number) => (
          <div key={index} className="flex items-start ">
            <span className="text-[22px] pb-1 leading-[52px]">
              {index + 1}. {point}
            </span>
          </div>
        ))}
      </ul>
      <p className="text-[20px] leading-[52px]  xsm:text-10 mt-6  ">
        {data?.ServiceRequirements}
      </p>
      <p className="text-[20px] leading-[52px]  xsm:text-10 mt-6  ">
        {data?.SocialMediaLoginData}
      </p>
      <ul className="grid !gap-y-[16px] text-base mt-2">
        {data?.TechnicalData?.map((point: any, index: number) => (
          <div key={index} className="flex items-start" >
            <span className="text-[22px] pb-1 leading-[52px]"> {index + 1}.</span>
            <span className="text-[22px] pb-1 leading-[52px]"  dangerouslySetInnerHTML={{ __html: point}}>
             
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PersonalDataFrom;
