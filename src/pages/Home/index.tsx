import Banner from "@/screen/Banner";
import CasinoTable from "@/screen/CasinoTable";
import DidYouKnow from "@/screen/DidYouKnow";
import FooterComponent from "@/screen/Footer";
import Header from "@/screen/Header";
import { QuestionContainer } from "@/screen/QuestionContainer";
import React from "react";

const LandingScreen: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <CasinoTable />
      <DidYouKnow />
      <QuestionContainer />
      <FooterComponent />
    </React.Fragment>
  );
};

export default LandingScreen;
