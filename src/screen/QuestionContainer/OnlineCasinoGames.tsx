import { RowElement } from "@/components/RowElement";
import WSpacedContainer from "@/components/WSpacedContainer";
import { typesOfOnlineCasinoGames } from "@/utils/data";
import { text } from "@/utils/text";
import Image from "next/image";
import React from "react";

export const OnlineCasinoGames: React.FC = () => {
  return (
    <WSpacedContainer className="xsm:px-4">
    <div className="!grid !gap-y-4">
      <h1 className="text-[48px] font-bold leading-[52px] xsm:text-[40px]">
        {text.typesOfOnlineCasinoGames}
      </h1>
      <span className="text-base">
        {`Canadian casinos boast a diverse range of games that cater to players' varied preferences. Whether you're a fan of classic casino online games or seeking modern variations, the options are endless. Here are some popular game types you can expect to find at online casinos in Canada:`}
      </span>
      <ul className="grid !gap-y-[10px] text-base">
        {typesOfOnlineCasinoGames.map((value: string, index: number) => {
          return (
            <RowElement key={index} className="!items-start">
              <Image
                src={"/icon/CasinoChip.png"}
                alt="Casino Chip"
                fill={false}
                width={21}
                height={21}
                className="!object-contain"
              />
              <span>{value}</span>
            </RowElement>
          );
        })}
      </ul>
    </div>
    </WSpacedContainer>
  );
};
