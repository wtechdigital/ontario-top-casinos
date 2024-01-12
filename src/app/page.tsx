import Banner from "@/screen/Banner";
import Header from "../screen/Header";
import DidYouKnow from "@/screen/DidYouKnow";
import { QuestionContainer } from "@/screen/QuestionContainer";
import FooterComponent from "@/screen/Footer";
import CasinoTable from "@/screen/CasinoTable";

export default function Home() {
  return (
    <main className="font-Kanit mb-12 scroll-smooth">
      <Header />
      <Banner />
      <CasinoTable />
      <DidYouKnow />
      <QuestionContainer />
      <FooterComponent />
    </main>
  );
}