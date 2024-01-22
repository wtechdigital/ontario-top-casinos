import WSpacedContainer from "@/components/WSpacedContainer";
import { footerImage } from "@/utils/data";
import Image from "next/image";
import React from "react";

export const CopyrightContainer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="xsm:px-4">
      <WSpacedContainer className="flex justify-between items-center xsm:flex-col-reverse xsm:gap-y-6">
        <h4 className="xsm:text-sm">Copyright © {year} Ontario Top Casinos. All rights reserved</h4>
        <picture className="!relative flex gap-x-8 xsm:gap-x-4">
          {footerImage.map((imageSrc, index) => (
            <Image
              src={imageSrc}
              alt={imageSrc}
              key={index}
              fill={true}
              className="!relative !object-contain !h-6 xsm:!h-[18px]"
            />
          ))}
        </picture>
      </WSpacedContainer>
    </section>
  );
};
