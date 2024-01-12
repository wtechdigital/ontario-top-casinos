import React from "react";
import { Casino, Highlights, Link, OurScore, Rating } from "./Table";
import { CasinoItem } from "@/utils/data";
import { Loader } from "@/components/Loader";

type AffiliateTableProps = {
  data: CasinoItem[] | undefined;
  loading: boolean;
};
export const AffiliateTable: React.FC<AffiliateTableProps> = ({
  data,
  loading,
}) => {
  return (
    <div className="hidden xsm:grid xsm:px-4 xsm:gap-y-11">
      {!loading ? (
        data?.map((items: CasinoItem, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col border-[1px] border-[#e6e6e866] rounded-3xl p-6 xsm:relative group hover:border-[#AA0BEA]"
            >
              <span className="absolute -top-4 rounded-lg bg-[#261A2B] w-8 h-8 grid place-items-center group-hover:bg-[#AA0BEA]">
                {items.id}
              </span>
              <div className="flex gap-x-6">
                <Casino
                  src={`https://strapi-canada-reviews-u7263.vm.elestio.app${items?.attributes?.casino?.data?.attributes?.url}`}
                />
                <div className="flex-col">
                  <Rating
                    views={items.attributes.views}
                    rating={items?.attributes?.rating}
                  />
                  <div className="mt-4">
                    <OurScore score={items.attributes.ourScore} />
                  </div>
                </div>
              </div>
              <Highlights text={items.attributes.highlights} />
              <Link href={items?.attributes?.link} />
            </div>
          );
        })
      ) : (
        <div className="w-full grid place-items-center my-4">
          <Loader />
        </div>
      )}
    </div>
  );
};
