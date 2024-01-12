import Image from "next/image";
import React from "react";
import { TextContent } from "./components/TextContent";
import WSpacedContainer from "@/components/WSpacedContainer";

const Banner: React.FC = () => {
  return (
    <section className="!relative">
      <Image
        src={"/image/Ellipse800.png"}
        alt="chip"
        fill={false}
        width={345}
        height={0}
        className="!object-contain -z-10 !absolute right-0 -bottom-50"
      />
      <Image
        src={"/image/image81.png"}
        alt="chip"
        fill={false}
        width={123}
        height={89}
        className="!object-contain !absolute right-0 bottom-0 -z-20 xsm:!w-[70px] xsm:-top-16"
      />
      <WSpacedContainer className="w-full flex justify-between !h-[490px] xsm:!h-fit xsm:px-4">
        <div className="w-2/4 xsm:w-full">
          <TextContent />
        </div>
        <div className="w-2/4 max-h-[490px] !relative xsm:hidden">
          <picture>
            <Image
              src={"/image/Banner.png"}
              alt="image 78"
              fill={true}
              className="!relative !object-contain"
            />
          </picture>
        </div>
      </WSpacedContainer>
    </section>
  );
};

export default Banner;
