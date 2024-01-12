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
    const [loading, setIsLoading] = React.useState<boolean>(true)

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
    <section className="mt-[72px] !relative" id="casino-table">
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
          loading={loading}
        />
        <AffiliateTable
          data={affiliateTableData?.data}
          loading={loading}
        />
      </WSpacedContainer>
    </section>
  );
};

export default CasinoTable;
