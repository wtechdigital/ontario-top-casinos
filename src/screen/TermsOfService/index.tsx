import React from "react";
import WSpacedContainer from "@/components/WSpacedContainer";
import axios from "axios";
import { Loader } from "@/components/Loader";

const Services = () => {
  const [services, setServices] = React.useState<any>();
  const [updatedon, setUpdatedOn] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://strapi-canada-reviews-u7263.vm.elestio.app/api/terms-of-uses`
      )
      .then((response) => {
        const formattedDate: string =
          response?.data?.data[0]?.attributes?.updatedAt.toLocaleString(
            "en-US",
            options
          );

        setUpdatedOn(formattedDate);
        setServices(
          response?.data?.data[0]?.attributes?.Service?.TermsOfService
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <WSpacedContainer className="xsm:px-4 py-8">
      {!loading ? (
        <div>
          <h1 className="text-[36px] font-bold leading-[52px] xsm:text-10  ">
            {services?.title}
          </h1>
          <p className="text-[20px] font-700 leading-[52px] xsm:text-10  ">
            Website name {services?.review}
          </p>
          <p className="text-[20px] font-700 leading-[52px] xsm:text-10 mt-2 ">
            {services?.accessingWebsite}
          </p>

          <p className="text-[25px] font-700 leading-[52px] xsm:text-10 mt-2 ">
            Disclosure
          </p>
          <ul className="grid !gap-y-[16px] text-base mt-5 leading-[52px] ">
            {services?.Disclosure?.map((point: any, index: number) => (
              <div key={index} className="flex items-start ">
                <span className="text-[20px] pb-1">{point}</span>
              </div>
            ))}
          </ul>

          <p className="text-[25px] font-700 leading-[52px] xsm:text-10 mt-2 ">
            Use Of Data
          </p>
          <p className="text-[20px] leading-[52px]  xsm:text-10 mt-2 ">
            {services?.UseOfData}
          </p>
          <p className="text-[25px] font-700 leading-[52px] xsm:text-10 mt-2 ">
            Disclaimer Of Warranty
          </p>
          <ul className="grid !gap-y-[16px] text-base mt-5  ">
            {services?.DisclaimerOfWarranty?.map(
              (point: any, index: number) => (
                <div key={index} className="flex items-start ">
                  <span className="text-[20px] leading-[52px] pb-1">
                    {point}
                  </span>
                </div>
              )
            )}
          </ul>
          <p className="text-[25px] font-700 leading-[52px] xsm:text-10 mt-2 ">
            Costs For Additional Services
          </p>
          <ul className="grid !gap-y-[16px] text-base mt-5  ">
            {services?.CostsForAdditional?.map((point: any, index: number) => (
              <div key={index} className="flex items-start ">
                <span className="text-[20px] leading-[52px] pb-1">{point}</span>
              </div>
            ))}
          </ul>
          <p className="text-[20px] font-700 leading-[52px] xsm:text-10 mt-2 ">
            {services?.revision}
          </p>
          <p className="text-[20px] font-700 leading-[52px] xsm:text-10 mt-2 ">
            Updated: {updatedon}
          </p>
        </div>
      ) : (
        <div className="w-full grid place-items-center my-4">
          <Loader />
        </div>
      )}
    </WSpacedContainer>
  );
};

export default Services;
