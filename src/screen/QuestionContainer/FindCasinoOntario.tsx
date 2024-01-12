import WSpacedContainer from "@/components/WSpacedContainer";
import { findingBestOnlineCasion } from "@/utils/data";
import { text } from "@/utils/text";
import Image from "next/image";
import React from "react";

export const FindCasinoOntario: React.FC = () => {
  return (
    <WSpacedContainer className="xsm:px-4">
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
      <div className="grid gap-y-4">
        <h1 className="text-[48px] font-bold leading-[52px] xsm:text-[40px]">
          {text.findBestOnlineCasinoOntario}
        </h1>
        <span className="text-base">
          With the abundance of online casinos in Ontario and Canada, finding
          the perfect one can be overwhelming. Our mission is to help you
          navigate through the options and make an informed choice about the
          different casino online Canada choices. Here are a few key factors to
          consider when choosing an online casino:
        </span>
        <ul className="grid !gap-y-[10px] text-base">
          {findingBestOnlineCasion.map((item, index) => (
            <div key={index} className="flex items-start">
              <span className="mr-1 w-[10px]">{index + 1}.</span>
              <span>{item}</span>
            </div>
          ))}
        </ul>
      </div>
    </WSpacedContainer>
  );
};
