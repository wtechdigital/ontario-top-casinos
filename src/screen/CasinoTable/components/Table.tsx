import React from "react";
import { CasinoItem, tableHead } from "@/utils/data";
import Image from "next/image";
import { text } from "@/utils/text";
import { Loader } from "@/components/Loader";

type TableProps = {
  data: CasinoItem[] | undefined;
  showCurrentAffiliatesData: number;
  loading: boolean;
};

export const Casino = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="Casino Card Frame"
      fill={false}
      width={192}
      height={92}
      className="!relative !object-contain rounded-2xl"
    />
  );
};

export const OurScore = ({ score = 4.9 }: { score?: number | string }) => {
  return (
    <div className="flex items-center gap-x-2 xsm:items-start">
      <span className="text-[#A3EC9C] font-bold text-5xl xsm:text-[32px]">
        {score}
      </span>
      <span className="text-base font-bold">/</span>
      <span className="text-base font-bold"> 10</span>
    </div>
  );
};

export const Highlights = ({ text }: { text?: string }) => {
  return (
    <div className="w-full text-wrap border-[1px] border-dashed border-white p-4 rounded-2xl  text-center my-6">
      <span className="text-[20px] flex-wrap font-bold">{text}</span>
    </div>
  );
};

export const Rating = ({
  views,
  rating,
}: {
  views: number | string;
  rating: string | number;
}) => {
  const unfilledStar = "/icon/UnfilledStar.png";
  const filledStar = "/icon/Star.png";

  const roundedRating = Math.round(Number(rating));

  return (
    <div className="flex flex-col items-center justify-start w-fit gap-y-1 xsm:gap-y-[2px]">
      <div className="flex !relative gap-x-1">
        {Array.from({ length: 5 }).map((_, index: number) => {
          return (
            <Image
              src={index < roundedRating ? filledStar : unfilledStar}
              alt="Rating"
              key={index}
              fill={false}
              width={22}
              height={22}
              className="!relative !object-contain xsm:!w-[16px] xsm:!h-[16px]"
            />
          );
        })}
      </div>
      <span>{`Views (${views})`}</span>
    </div>
  );
};

export const Link = ({ href }: { href: string | undefined }) => {
  return (
    <a
      href={href}
      className="bg-[#AA0BEA] rounded-2xl py-3 px-8 "
      style={{
        boxShadow: "0px 9px 32px 0px rgba(170, 11, 234, 0.50)",
      }}
      target="_blank"
    >
      <span>{text.visitSite}</span>
    </a>
  );
};

export const Table: React.FC<TableProps> = ({
  data,
  showCurrentAffiliatesData,
  loading,
}) => {
  return (
    <table className="table-auto w-full mx-auto xsm:hidden">
      <thead>
        <tr>
          {tableHead.map((item: string, index: number) => {
            let columnWidth = "auto";
            return (
              <th
                className="text-start pb-[14px] text-sm opacity-[0.6]"
                key={index}
                scope="col"
                style={{
                  fontWeight: "normal",
                  width: columnWidth,
                }}
              >
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="!p-6">
        {!loading && data?.length! > 0 ? (
          data
            ?.slice(0, showCurrentAffiliatesData)
            ?.map((item: CasinoItem, index: number) => {
              return (
                <tr
                  key={index}
                  className={`cursor-pointer h-[140px] group  transition-transform transform-gpu hover:outline hover:outline-4 hover:outline-[#AA0BEA]`}
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  <td className="w-[50px] h-[140px] items-center relative">
                    <span
                      className={`w-8 h-8 absolute grid place-items-center rounded-lg -left-[14px] !top-[40%] text-center bg-[#FFFFFF1A] group-hover:bg-[#AA0BEA]`}
                    >
                      {item?.id}
                    </span>
                  </td>
                  <td className="!w-[192px] !pr-6">
                    <Casino
                      src={`https://strapi-canada-reviews-u7263.vm.elestio.app${item?.attributes?.casino?.data?.attributes?.url}`}
                    />
                  </td>
                  <td className="!w-[150px] !pr-6">
                    <OurScore score={item?.attributes?.rating} />
                  </td>
                  <td className="!w-[324px] !pr-6">
                    <Highlights text={item?.attributes?.highlights} />
                  </td>
                  <td className="!w-[190px] !pr-6">
                    <Rating
                      views={item?.attributes?.views}
                      rating={item?.attributes?.rating}
                    />
                  </td>
                  <td className="!w-[131px]">
                    <Link href={item?.attributes?.link} />
                  </td>
                </tr>
              );
            })
        ) : (
          <tr>
            <td colSpan={6}>
              <div className="w-full grid place-items-center my-4">
              <Loader />
              </div>
             
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
