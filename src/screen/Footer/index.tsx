import React from "react";
import { FooterBar } from "./components/FooterBar";
import { AdvertiserDisclosure } from "./components/AdvertiserDisclosure";
import { CopyrightContainer } from "./components/CopyrightContainer";

const FooterComponent = () => {
  return (
    <footer className="pt-16 grid gap-y-[30px] !relative">
      <FooterBar />
      <AdvertiserDisclosure />
      <CopyrightContainer />
    </footer>
  );
};

export default FooterComponent;
