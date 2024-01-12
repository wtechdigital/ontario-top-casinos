/* eslint-disable react/no-unescaped-entities */

import WSpacedContainer from "@/components/WSpacedContainer";
import { text } from "@/utils/text";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const StartYourJouney: React.FC = () => {
  return (
    <WSpacedContainer className="xsm:px-4">
      <Image
        src={"/image/image81.png"}
        alt="chip"
        fill={false}
        width={123}
        height={89}
        className="!object-contain !absolute right-0 bottom-0 -z-10 xsm:hidden"
      />
      <Image
        src={"/image/Ellipse800.png"}
        alt="chip"
        fill={false}
        width={325}
        height={0}
        className="!object-contain !absolute right-0 -z-10 xsm:hidden"
        style={{
          bottom: "-18rem",
        }}
      />
      <div className="grid gap-y-4">
        <h1 className="text-[48px] font-bold leading-[52px] xsm:text-10">
          {text.startYourCasinoAdventure}
        </h1>
        <p className="leading-7">
          Now that you have a glimpse of the thriving casino gaming scene in
          Ontario and Canada, it's time to embark on your{" "}
          <Link href={"/"} className="text-[#FFB736] underline">
            casino online
          </Link>{" "}
          adventure. Explore the top online casinos and enjoy a wide selection
          of games. Whether you're a seasoned player or new to the world of
          online gaming, the casinos we recommend cater to all. Remember,
          responsible gaming is crucial for an enjoyable experience. Set your
          limits and embrace the excitement responsibly. Get ready to immerse
          yourself in the captivating world of online casinos in Canada and
          unleash the potential for unforgettable moments of entertainment.
        </p>
      </div>
    </WSpacedContainer>
  );
};
