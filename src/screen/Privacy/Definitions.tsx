import React from "react";

const Definitions = ({ data }: any) => {
  return (
    <div>
      <h1 className="text-[36px]  font-bold leading-[52px] xsm:text-10  ">
        {data?.title}
      </h1>

      <p className="text-[28px]   leading-[52px] xsm:text-10  ">
        {data?.description}
      </p>
      <p className="text-[20px]   leading-[52px] xsm:text-10  ">
        The Cookies : {data?.Cookies}
      </p>
      <p className="text-[20px]   leading-[52px] xsm:text-10  ">
      The Data Subject : {data?.DataSubject}
      </p>
      <p className="text-[20px]   leading-[52px] xsm:text-10  ">
      The Device : {data?.Device}
      </p>
      <p className="text-[20px]   leading-[52px] xsm:text-10  ">
      The IP Address : {data?.IPAddress}
      </p>
      <p className="text-[20px]   leading-[52px] xsm:text-10  ">
      The Personal Data : {data?.PersonalData}
      </p>
      <p className="text-[20px]   leading-[52px] xsm:text-10  ">
      The Pixels : {data?.Pixels}
      </p>
      <p className="text-[20px]   leading-[52px] xsm:text-10  ">
      The Technical Data : {data?.TechnicalData}
      </p>
      <p className="text-[20px]   leading-[52px] xsm:text-10  ">
      The Visitor: {data?.Visitor}
      </p>
      <p className="text-[20px]   leading-[52px] xsm:text-10  ">
      The Website: {data?.Website}
      </p>
      
    </div>
  );
};

export default Definitions;
