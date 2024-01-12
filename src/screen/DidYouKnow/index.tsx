import { RowElement } from "@/components/RowElement";
import WSpacedContainer from "@/components/WSpacedContainer";
import { text } from "@/utils/text";
import Image from "next/image";
import React from "react";

const DidYouKnow: React.FC = () => {
  return (
    <section className="w-full xsm:px-4">
      <WSpacedContainer className="mt-[72px] border-[3px] border-[#FFB736] p-6 rounded-3xl bg-[#FFB73633] flex items-center">
        <div>
          <RowElement className="!gap-4 xsm:!flex-col xsm:!items-start">
            <Image
              src={"/icon/crown.png"}
              alt="fi_6466962"
              unoptimized={false}
              fill={false}
              width={56}
              height={56}
              className="!object-contain"
            />
            <div className="flex flex-col">
              <span className="text-[20px] text-[#E6E6E8] font-bold">
                {text.didYouKnow}
              </span>
              <span className="text-lg text-[#E6E6E8] font-normal">
                {text.countVisitsToCasinosEvery90Days}
              </span>
            </div>
          </RowElement>
        </div>
      </WSpacedContainer>
    </section>
  );
};

export default DidYouKnow;
