import React from "react";
import { CasinoExplore } from "./CasinoExplore";
import { OnlineCasinoGames } from "./OnlineCasinoGames";
import { FindCasinoOntario } from "./FindCasinoOntario";
import { Regulations } from "./Regulations";
import { StartYourJouney } from "./StartYourJouney";

export const QuestionContainer: React.FC = () => {
  return (
    <section className="flex flex-col gap-y-[72px] py-[72px] border-b-[1px] border-b-[#E6E6E833] !relative">
      <CasinoExplore />
      <OnlineCasinoGames />
      <FindCasinoOntario />
      <Regulations />
      <StartYourJouney />
    </section>
  );
};
