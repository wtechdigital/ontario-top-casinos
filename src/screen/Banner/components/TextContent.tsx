"use client";

import React from "react";
import { RowElement } from "@/components/RowElement";
import { bannerData } from "@/utils/data";
import { text } from "@/utils/text";
import Image from "next/image";

export const TextContent: React.FC = () => {
  const scrollIntoView = React.useCallback(() => {
    const element = document.getElementById("casino-table");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }, []);

  return (
    <div className="flex flex-col gap-y-6">
      <RowElement className="pl-3 pr-4 py-1 rounded-full border-[#E6E6E833] border-[1px] border-stroke-20 !w-fit">
        <Image
          src={"/icon/Canada.png"}
          alt="fi_555473"
          fill={false}
          width={18}
          height={18}
          className="!object-contain"
        />
        <h4 className="text-sm text-[#E6E6E8]">
          {text.exploreOntarioLicensedCasinoSites}
        </h4>
      </RowElement>
      <h1 className="text-[80px] font-bold leading-[80px] xsm:text-[48px] xsm:leading-[48px]">
        {text.top5BestOnlineCasinos}
      </h1>

      <div className="grid !gap-y-2 xsm:w-full">
        {bannerData.map((value: string, index: number) => {
          return (
            <RowElement key={index}>
              <Image
                src={"/icon/CasinoChip.png"}
                alt="Casino Chip"
                fill={false}
                width={20}
                height={20}
                className="!object-contain"
              />
              <h4 className="text-base text-[#E6E6E8] font-normal xsm:text-wrap xsm:w-[80%]">
                {value}
              </h4>
            </RowElement>
          );
        })}
      </div>

      <RowElement className="mt-12">
        <button
          onClick={scrollIntoView}
          className="px-8 py-3 rounded-xl border-[1px] border-[#E6E6E8] xsm:w-fit xsm:px-6"
        >
          <span className="text-base font-bold text-normal">
            {text.selectCasino}
          </span>
        </button>
        <RowElement className="ml-9 xsm:ml-6">
          <Image
            src={"/icon/shield-check.png"}
            alt="heroicons-solid/shield-check"
            fill={false}
            width={24}
            height={24}
            className="!object-contain"
          />
          <h6>{text.secureAndTrusted}</h6>
        </RowElement>
      </RowElement>
    </div>
  );
};
