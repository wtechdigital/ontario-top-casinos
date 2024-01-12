import WSpacedContainer from "@/components/WSpacedContainer";
import { text } from "@/utils/text";
import Image from "next/image";
import React from "react";

export const CasinoExplore: React.FC = () => {
  return (
    <WSpacedContainer className="xsm:px-4">
      <Image
        src={"/image/Ellipse800.png"}
        alt="chip"
        fill={false}
        width={325}
        height={0}
        className="!object-contain !absolute right-0 -top-10 -z-10 xsm:hidden"
      />
      <Image
        src={"/image/image82.png"}
        alt="chip"
        fill={false}
        width={110}
        height={0}
        className="!object-contain !absolute right-0 top-30 xsm:hidden -z-10"
      />
      <div className="grid gap-y-4">
        <h1 className="text-[48px] font-bold leading-[52px] xsm:text-10">
          {text.casinoGamingExploreOnlineCasinosOntario}
        </h1>
        <p className="text-base">
          {`When it comes to online casino gaming, Canada offers a plethora of options for players to indulge in thrilling experiences. Among the provinces, Ontario stands out as one of the leading regions with a thriving online casino Canada scene. If you're looking for the top online casinos in Ontario or seeking an exciting Canada online casino, we've got you covered. Our comprehensive guide will take you through the exciting world of online casinos, popular games, and essential factors to consider while choosing the right gaming platform. Explore the Ontario casino online scene, and discover what’s best for you.`}
        </p>
      </div>
    </WSpacedContainer>
  );
};
