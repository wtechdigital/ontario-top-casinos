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
    <WSpacedContainer className="xsm:px-4 py-8 !font-Kanit">
      {!loading ? (
        <div>
          <h1 className="text-[48px] font-bold leading-[52px] xsm:text-10">
            {services?.title}
          </h1>
          <p className="mt-5">Website name {services?.review}</p>
          <p className="">{services?.accessingWebsite}</p>
          <h1 className="text-xl font-bold text-[#E6E6E8] mt-3">Disclosure</h1>

          <ul className="">
            {services?.Disclosure?.map((point: any, index: number) => (
              <div key={index} className="flex items-start ">
                <span className="">{point}</span>
              </div>
            ))}
          </ul>

          <h1 className="text-xl font-bold text-[#E6E6E8] mt-3">Use Of Data</h1>
          <p className="">{services?.UseOfData}</p>
          <h1 className="text-xl font-bold text-[#E6E6E8] mt-3">
            Disclaimer Of Warranty
          </h1>
          <ul className="">
            {services?.DisclaimerOfWarranty?.map(
              (point: any, index: number) => (
                <div key={index} className="flex items-start ">
                  <span className="">{point}</span>
                </div>
              )
            )}
          </ul>
          <h1 className="text-xl font-bold text-[#E6E6E8] mt-3">
            Costs For Additional Services
          </h1>
          <ul className="">
            {services?.CostsForAdditional?.map((point: any, index: number) => (
              <div key={index} className="flex items-start ">
                <span className="">{point}</span>
              </div>
            ))}
          </ul>
          <p className="">{services?.revision}</p>
          <p className="mt-3">
           <span className="text-xl font-bold text-[#E6E6E8]">Updated:</span>  {updatedon}
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
