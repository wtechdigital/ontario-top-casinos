import WSpacedContainer from "@/components/WSpacedContainer";
import { footerLinkData } from "@/utils/data";
import { text } from "@/utils/text";
import Image from "next/image";
import React from "react";

export const FooterBar: React.FC = () => {
  return (
    <section>
      <WSpacedContainer className="flex justify-between items-center xsm:px-4 xsm:flex-col xsm:items-start xsm:gap-y-6">
        <nav className="flex items-start gap-x-2 cursor-pointer">
          <Image
            src={"/icon/crown.png"}
            alt="fi_6466962"
            unoptimized={false}
            fill={false}
            width={24}
            height={24}
            className="!object-contain"
          />
          <h1 className="text-xl font-bold text-[#E6E6E8]">
            {text.canadaReview}
          </h1>
        </nav>
        <nav className="flex gap-x-8 xsm:flex-col xsm:gap-y-2">
          {footerLinkData.map((item: string, index: number) => {
            return (
              <h1
                key={index}
                className="text-base font-normal text-[#E6E6E8] cursor-pointer"
              >
                {item}
              </h1>
            );
          })}
        </nav>
      </WSpacedContainer>
    </section>
  );
};
