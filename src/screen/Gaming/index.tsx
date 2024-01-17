"use client";
import React from "react";
import axios from "axios";
import WSpacedContainer from "@/components/WSpacedContainer";
import Image from "next/image";
import { Loader } from "@/components/Loader";
const ResponsibleGamings = () => {
  const [responsibleGaming, setResponsibleGaming] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://strapi-canada-reviews-u7263.vm.elestio.app/api/responsible-gamings`
      )
      .then((response) => {
        setResponsibleGaming(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);


  return (
    <WSpacedContainer className="xsm:px-4 py-8 !font-Kanit">
      {!loading ? (
        <div>
          <Image
            src={"/image/image83.png"}
            alt="chip"
            fill={false}
            width={80}
            height={0}
            className="!object-contain absolute left-0 top-auto xsm:hidden -z-10"
          />
          <Image
            src={"/image/Ellipse803.png"}
            alt="chip"
            fill={false}
            width={245}
            height={0}
            className="!object-contain absolute -z-10 left-0 top-[255px] xsm:hidden"
          />
          <h1 className="text-[48px] font-bold leading-[52px] xsm:text-10">
            Responsible gaming
          </h1>

          <p className="xsm:text-10 mt-4">
            {
              responsibleGaming?.data?.data[0]?.attributes?.reponsiveGaming
                ?.title
            }
          </p>
          <p className="xsm:text-10">
            {
              responsibleGaming?.data?.data[0]?.attributes?.reponsiveGaming
                ?.description
            }
          </p>

          <ul className=" text-base mt-2">
            {responsibleGaming?.data?.data[0]?.attributes?.reponsiveGaming?.blockOne.map(
              (point: any, index: number) => (
                <div key={index} className="flex items-start">
                  <span className="pb-1 mr-1"> {index + 1}.</span>
                  <span
                    className="pb-1"
                    dangerouslySetInnerHTML={{ __html: point }}
                  ></span>
                </div>
              )
            )}
          </ul>
          <p className="xsm:text-10">
            {
              responsibleGaming?.data?.data[0]?.attributes?.reponsiveGaming
                ?.blockTwoHeading
            }
          </p>
          <ul className=" text-base mt-2">
            {responsibleGaming?.data?.data[0]?.attributes?.reponsiveGaming?.blockTwoDetails.map(
              (point: any, index: number) => (
                <div key={index} className="flex items-start">
                  <span className="pb-1 mr-1"> {index + 1}.</span>
                  <span
                    className=" pb-1 "
                    dangerouslySetInnerHTML={{ __html: point }}
                  ></span>
                </div>
              )
            )}
          </ul>
          <p className="xsm:text-10">
            {
              responsibleGaming?.data?.data[0]?.attributes?.reponsiveGaming
                ?.blockThreeHeading
            }
          </p>
          <ul className=" text-base mt-2">
            {responsibleGaming?.data?.data[0]?.attributes?.reponsiveGaming?.blockThreeDetails.map(
              (point: any, index: number) => (
                <div key={index} className="flex items-start">
                  <span className="pb-1 mr-1"> {index + 1}.</span>
                  <span
                    className=" pb-1 "
                    dangerouslySetInnerHTML={{ __html: point }}
                  ></span>
                </div>
              )
            )}
          </ul>
        </div>
      ) : (
        <div className="w-full grid place-items-center my-4">
          <Loader />
        </div>
      )}
    </WSpacedContainer>
  );
};

export default ResponsibleGamings;
