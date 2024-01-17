import React from "react";

const Definitions = ({ data }: any) => {
  return (
    <div>
      <h1 className="text-[48px] font-bold leading-[52px] xsm:text-10">
        {data?.title}
      </h1>

      <p>{data?.description}</p>
      <p dangerouslySetInnerHTML={{ __html: data?.Cookies }}></p>
      <p dangerouslySetInnerHTML={{ __html: data?.DataSubject }}></p>
      <p dangerouslySetInnerHTML={{ __html: data?.Device }}></p>
      <p dangerouslySetInnerHTML={{ __html: data?.IPAddress }}></p>
      <p dangerouslySetInnerHTML={{ __html: data?.PersonalData }}></p>
      <p dangerouslySetInnerHTML={{ __html: data?.Pixels }}></p>
      <p dangerouslySetInnerHTML={{ __html: data?.TechnicalData }}></p>
      <p dangerouslySetInnerHTML={{ __html: data?.Visitor }}></p>
      <p dangerouslySetInnerHTML={{ __html: data?.Website }}></p>
    </div>
  );
};

export default Definitions;
