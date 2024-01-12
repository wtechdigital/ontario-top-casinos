import WSpacedContainer from "@/components/WSpacedContainer";
import { text } from "@/utils/text";
import Image from "next/image";
import React, { ReactNode } from "react";

interface paragraphElement {
  children: ReactNode;
}
const ParagraphText: React.FC<paragraphElement> = ({ children }) => {
  return <span className="text-base">{children}</span>;
};

export const Regulations: React.FC = () => {
  return (
    <WSpacedContainer className="xsm:px-4">
      <div className="grid gap-y-4">
        <h1 className="text-[48px] font-bold leading-[52px] xsm:text-10">
          {text.regulationsAndSaferGambling}
        </h1>
        <ParagraphText>
          In Ontario, Canada, online casinos are heavily regulated by the
          Alcohol and Gaming Commission of Ontario (AGCO). This is great news
          for players, who can access licensed gaming platforms that meet strict
          game integrity and responsible gaming standards.
        </ParagraphText>
        <ParagraphText>
          Despite this, there are still unlicensed providers operating in
          Ontario. However, you can quickly check whether your chosen platform
          is regulated by looking for the iGaming Ontario logo, which indicates
          fully regulated and approved operators.
        </ParagraphText>
        <ParagraphText>
          Gamers also have access to a selection of responsible gambling and
          player support resources via the iGaming Ontario website. Regulated
          gaming platforms give you the ability to self-exclude, and you can set
          deposit and loss limits to ensure you’re not playing beyond your
          means.
        </ParagraphText>
      </div>
    </WSpacedContainer>
  );
};
