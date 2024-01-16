import React from "react";

const ProcessorsofthePersonaldata = ({ data }: any) => {
  return (
    <div>
      {" "}
      <h1 className="text-[36px] font-bold leading-[52px] xsm:text-10  ">
        {data?.title}
        <p
          className="text-[20px] leading-[52px] xsm:text-10"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></p>
        <p className="text-[20px] leading-[52px] xsm:text-10">
          {data?.heading}
        </p>
        <ul className="grid !gap-y-[16px] text-base mt-2">
          {data?.processesList?.map((point: any, index: number) => (
            <div key={index} className="flex items-start ">
              <span
                className="text-[22px] pb-1 leading-[52px]"
                dangerouslySetInnerHTML={{ __html: point }}
              ></span>
            </div>
          ))}
        </ul>
        <p className="text-[20px]  leading-[52px] xsm:text-10">
          {data?.purposes}
        </p>
      </h1>
    </div>
  );
};

export default ProcessorsofthePersonaldata;
