import React from "react";

const HowDoWeUsePersonaldata = ({ data }: any) => {
  return (
    <div>
      <h1 className="text-[48px] font-bold leading-[52px] xsm:text-10">
        {data?.title}
      </h1>
      <p className=" xsm:text-10">
        {data?.description}
      </p>

      <p
        className=" xsm:text-10"
        dangerouslySetInnerHTML={{ __html: data?.right }}
      ></p>
      <p className=" xsm:text-10">
        Protection of children
      </p>
      <ul className=" text-base mt-2">
        {data?.protectionOfChildren?.map((point: any, index: number) => (
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

export default HowDoWeUsePersonaldata;
