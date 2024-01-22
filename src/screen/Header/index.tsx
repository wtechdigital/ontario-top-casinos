import WSpacedContainer from "@/components/WSpacedContainer";
import { headersNav } from "@/utils/data";
import { text } from "@/utils/text";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="mt-6 mb-[42px]">
      <WSpacedContainer className="flex justify-between items-center xsm:w-full xsm:px-4">
        <div
          className="w-[35rem] h-[185px] absolute top-0 left-[18%] transform rotate-[-25.956deg] rounded-full opacity-20 xsm:hidden"
          style={{
            background:
              "linear-gradient(169deg, #AA0BEA 27.59%, #C954CD 45.1%, #DE81AF 62.62%, #EDAA8E 80.13%, #F7D166 97.64%, #FCF81E 115.15%)",
            filter: "blur(100px)",
          }}
        />
        <nav className="flex items-start gap-x-2 cursor-pointer">
          <Image
            src={"/icon/crown.png"}
            alt="fi_6466962"
            unoptimized={false}
            fill={false}
            width={24}
            height={24}
            className="!object-contain"
          />
          <a href="/">
          <h1 className="text-xl font-bold text-[#E6E6E8]">
            {text.canadaReview}
          </h1>
          </a>
        </nav>
        <nav className="flex gap-x-8 xsm:hidden">
          {headersNav.map((item: string, index: number) => {
            return (
              <a href="#casino-table">
              <h1
                key={index}
                className="text-base font-normal text-[#E6E6E8] cursor-pointer"
              >
                {item}
              </h1>
              </a>
            );
          })}
        </nav>
      </WSpacedContainer>
    </header>
  );
};

export default Header;
