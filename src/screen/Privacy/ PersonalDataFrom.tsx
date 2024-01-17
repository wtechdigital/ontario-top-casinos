import React from "react";

const PersonalDataFrom = ({ data }: any) => {
  return (
    <div>
      <h1 className="text-[48px] font-bold leading-[52px] xsm:text-10">
        {data?.title}
      </h1>

      <p className="  xsm:text-10" dangerouslySetInnerHTML={{ __html: data?.cases }}>
      </p>

      <ul className="text-base mt-2">
        {data?.DirectSources?.map((point: any, index: number) => (
          <div key={index} className="flex items-start ">
            <span className="pb-1 mr-1">
              {index + 1}. {point}
            </span>
          </div>
        ))}
      </ul>
      <p className="   xsm:text-10 mt-6  ">
        {data?.ServiceRequirements}
      </p>
      <p className="   xsm:text-10 mt-6  ">
        {data?.SocialMediaLoginData}
      </p>
      <ul className="text-base mt-2">
        {data?.TechnicalData?.map((point: any, index: number) => (
          <div key={index} className="flex items-start" >
            <span className="pb-1 mr-1"> {index + 1}.</span>
            <span className=" pb-1 "  dangerouslySetInnerHTML={{ __html: point}}>
             
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PersonalDataFrom;
