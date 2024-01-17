"use client";
import React from "react";
import axios from "axios";
import WSpacedContainer from "@/components/WSpacedContainer";
import Image from "next/image";
import { Loader } from "@/components/Loader";
const ResponsibleGamings = () => {
  const [responsibleGaming, setResponsibleGaming] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://strapi-canada-reviews-u7263.vm.elestio.app/api/responsible-gamings`
      )
      .then((response) => {
        setResponsibleGaming(response?.data);
        setLoading(false);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);

      });
  }, []);

  return (
    <WSpacedContainer className="xsm:px-4 py-8">
     {!loading ?  <div>

    
      <Image
        src={"/image/image83.png"}
        alt="chip"
        fill={false}
        width={80}
        height={0}
        className="!object-contain absolute left-0 top-auto xsm:hidden -z-10"
      />
      <Image
        src={"/image/Ellipse803.png"}
        alt="chip"
        fill={false}
        width={245}
        height={0}
        className="!object-contain absolute -z-10 left-0 top-[255px] xsm:hidden"
      />
      <h1 className="text-[54px]  leading-[20px] xsm:text-10 p-4">
       Responsible gaming
      </h1>
      <h1 className="text-[18px]  leading-[40px] xsm:text-10 p-4">
        {responsibleGaming?.data[0]?.attributes?.description}
      </h1>
      <ul className="grid !gap-y-[16px] text-base mt-10 p-2">
        {responsibleGaming?.data[0]?.attributes?.points?.map(
          (point: any, index: number) =>
            point?.children?.map((child: any, childIndex: number) => (
              <div key={index} className="flex items-start ">
               <span className="text-[18px] pb-2" key={childIndex}>{child?.text}</span>
             </div>
            ))
        )}
      </ul>
      </div> :  <div className="w-full grid place-items-center my-4">
          <Loader />
        </div>}
    </WSpacedContainer>
  );
};

export default ResponsibleGamings;
