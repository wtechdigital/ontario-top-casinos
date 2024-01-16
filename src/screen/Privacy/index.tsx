import React from "react";
import axios from "axios";
import GeneralInformation from "./GeneralInformation";
import WSpacedContainer from "@/components/WSpacedContainer";
import OurContact from "./Contact";
import Definitions from "./Definitions";
import PersonalDataFrom from "./ PersonalDataFrom";
import Image from "next/image";
import PrivacyData from "./privacy-policy.json";
import HowDoWeUsePersonaldata from "./HowDoWeUsePersonaldata";
import WhereAndHowPersonalDataStore from "./WhereAndHowPersonalDataStore";
import Personaldatatothirdparties from "./Personaldatatothirdparties";
import ProcessorsofthePersonaldata from "./ProcessorsofthePersonaldata";
import CrossBorderDataTransfer from "./CrossBorderDataTransfer";
import CookiesTechnologies from "./CookiesTechnologies";
import LimitationOfLiability from "./LimitationOfLiability";

const PrivacyPolicies = () => {
 
  console.log(PrivacyData, "PrivacyData");
  return (
    <WSpacedContainer className="xsm:px-4 py-8">
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
      <GeneralInformation data={PrivacyData?.data.GeneralInformation} />
      <OurContact data={PrivacyData?.data.ContactDetails} />
      <Definitions data={PrivacyData?.data.Definitions} />
      <PersonalDataFrom data={PrivacyData?.data.DataCollection} />
      <HowDoWeUsePersonaldata data={PrivacyData?.data.UsePersonalData}/>
      <WhereAndHowPersonalDataStore data={PrivacyData?.data.WhereAndHowPersonalDataStore}/>
      <Personaldatatothirdparties data={PrivacyData?.data.personaldatatothirdparties}/>
      <ProcessorsofthePersonaldata data={PrivacyData?.data.processorsofthePersonaldata}/>
      <CrossBorderDataTransfer data={PrivacyData?.data.crossBorderDataTransfer}/>
      <CookiesTechnologies data={PrivacyData?.data.CookiesTechnologies}/>
      <LimitationOfLiability data={PrivacyData?.data.LimitationOfLiability}/>
      
          </WSpacedContainer>
  );
};

export default PrivacyPolicies;
