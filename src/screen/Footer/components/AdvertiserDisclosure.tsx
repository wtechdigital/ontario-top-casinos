import { RowElement } from "@/components/RowElement";
import WSpacedContainer from "@/components/WSpacedContainer";
import { text } from "@/utils/text";
import Image from "next/image";
import React from "react";

export const AdvertiserDisclosure: React.FC = () => {
  return (
    <section className="xsm:px-4">
      <Image
        src={"/image/image85.png"}
        alt="chip"
        fill={false}
        width={80}
        height={0}
        className="!object-contain !absolute left-0 bottom-28 -z-10 xsm:hidden"
      />
      <Image
        src={"/image/Ellipse803.png"}
        alt="chip"
        fill={false}
        width={285}
        height={200}
        className="!object-contain absolute -z-10 left-0 xsm:hidden"
        style={{
          bottom: '-1rem'
        }}
      />
      <WSpacedContainer className="p-6 rounded-3xl border-[1px] border-[#E6E6E833] grid gap-y-2">
        <RowElement className="!gap-1">
          <h5 className="text-base font-bold">18+</h5>
          <h5 className="text-base font-bold">{text.advertiserDisclosure}</h5>
        </RowElement>
        <p className="opacity-[0.6] text-sm font-normal">
          This website is a free online resource that strives to offer helpful
          content and comparison features to our visitors. We accept advertising
          compensation from companies that appear on the site, which impacts the
          location and order in which brands (and/or their products) are
          presented, and also impacts the score that is assigned to it. Company
          listings on this page DO NOT imply endorsement. We do not feature all
          providers on the market. Except as expressly set forth in our Terms of
          Use, all representations and warranties regarding the information
          presented on this page are disclaimed. The information, including
          pricing, which appears on this site is subject to change at any time.
        </p>
      </WSpacedContainer>
    </section>
  );
};
