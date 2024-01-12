"use client";

import Button from "@/components/Button";
import WSpacedContainer from "@/components/WSpacedContainer";

import { text } from "@/utils/text";
import Image from "next/image";
import React from "react";
import { Table } from "./components/Table";
import { AffiliateTable } from "./components/AffiliateTable";
import axios from "axios";
import { CasinoData } from "@/utils/data";

const CasinoTable: React.FC = () => {
  const [affiliateTableData, setAffiliateTableData] =
    React.useState<CasinoData>();
  const [showCurrentAffiliatesData, setShowCurrentAffiliatesData] =
    React.useState<number>(3);
    const [loading, setIsLoading] = React.useState<boolean>(true)

  const onLoadMore = React.useCallback(() => {
    const tableDataLength = affiliateTableData?.data?.length || 0;
    setShowCurrentAffiliatesData((prevValue) =>
      Math.min(prevValue + 3, tableDataLength)
    );
  }, [affiliateTableData?.data]);

  React.useEffect(() => {
    axios
      .get(
        `https://strapi-canada-reviews-u7263.vm.elestio.app/api/affiliate-tables?populate=*`
      )
      .then((response) => {
        setAffiliateTableData(response.data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false)
      });
  }, []);

  return (
    <section className="mt-[72px] !relative">
      <Image
        src={"/image/Ellipse803.png"}
        alt="chip"
        fill={false}
        width={325}
        height={0}
        className="!object-contain -z-10 !absolute left-0 bottom-28 xsm:hidden"
      />
      <Image
        src={"/image/image85.png"}
        alt="chip"
        fill={false}
        width={95}
        height={0}
        className="!object-contain !absolute left-0 top-40 xsm:hidden"
      />
      <WSpacedContainer>
        <Table
          data={affiliateTableData?.data}
          showCurrentAffiliatesData={showCurrentAffiliatesData}
          loading={loading}
        />
        <AffiliateTable
          data={affiliateTableData?.data}
          showCurrentAffiliatesData={showCurrentAffiliatesData}
          loading={loading}
        />
        <div className="w-full grid place-items-center mt-8">
          <button
            type="button"
            className="px-6 py-[9px] border-[1px] border-[#E6E6E8] rounded-xl load-more"
            onClick={() => onLoadMore()}
            disabled={
              affiliateTableData?.data?.length! === showCurrentAffiliatesData
            }
          >
            <span className="text-base font-bold">{text.loadMore}</span>
          </button>
        </div>
      </WSpacedContainer>
    </section>
  );
};

export default CasinoTable;
