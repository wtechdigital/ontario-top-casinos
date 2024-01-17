import React from "react";

const ProcessorsofthePersonaldata = ({ data }: any) => {
  return (
    <div>
      {" "}
      <h1 className="text-[48px] font-bold leading-[52px] xsm:text-10">
        {data?.title}
        </h1>
        <p
          className="  xsm:text-10"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></p>
        <p className="  xsm:text-10">
          {data?.heading}
        </p>
        <ul className=" text-base mt-2">
          {data?.processesList?.map((point: any, index: number) => (
            <div key={index} className="flex items-start ">
              <span className="mr-1 pb-1">{index+1}. </span>
              <span
                className=" pb-1 "
                dangerouslySetInnerHTML={{ __html: point }}
              ></span>
            </div>
          ))}
        </ul>
        <p className="  xsm:text-10">
          {data?.purposes}
        </p>
      
    </div>
  );
};

export default ProcessorsofthePersonaldata;
