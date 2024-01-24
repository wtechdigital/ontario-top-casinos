export const headersNav: string[] = [
  "Top Casinos Rating",
  "Types Of Online Casino Games",
  "Regulations",
];

export const bannerData: string[] = [
  `Find Ontario's legal iGaming casino sites`,
  `Each online casino independently reviewed and approved`,
  `Ontario’s top casino sites featuring the best casino, slots, and live games`,
];

export const typesOfOnlineCasinoGames: string[] = [
  `Find Ontario's legal iGaming casino sites`,
  `Blackjack - Aim to achieve a hand with a total value of exactly 21 in this classic card game.`,
  `Slots - The most popular games at both online and brick-and-mortar casinos. Online slots provide a streamlined experience with a vast array of themes and features.`,
  `Live Casino - Enjoy the immersive atmosphere of a land-based casino through live video feeds with human dealers. Interact with the dealer and witness the game unfold in real-time.`,
];
export const findingBestOnlineCasion: string[] = [
  "Game Variety - A wide selection of games from renowned software providers like NetEnt, Microgaming, and Playtech ensures an exciting gaming experience.",
  "Customer Support - Quick and responsive customer support is vital for a smooth gaming journey.",
  "Payment and Withdrawal Options - Secure and diverse payment methods facilitate easy transactions.",
  "User Interface - A smooth and easy-to-navigate interface can maximize your online gaming experience. It’s also worth paying attention to how mobile-friendly a casino is, especially if you want to play on-the-go.",
];

export const footerLinkData: string[] = [
  "Be Gamble Aware",
  "Privacy",
  "Terms of Use"
];

export const footerImage: string[] = [
  "/icon/image90.png",
  "/icon/image92.png",
  "/icon/image94.png",
];

export const tableHead: string[] = [
  "",
  "Casino",
  "Our Score",
  "Highlights",
  "Rating",
  "Link",
];


export type CasinoData = {
  data: CasinoItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type CasinoItem = {
  id: number;
  attributes: {
    ourScore: number;
    highlights: string;
    views: string;
    rating: number;
    link: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    casino: any
  };
};

export type ResponsibleGaming ={
  config: any;
  data: {
    data: Array<{
      attributes: {
        createdAt: string;
        description: string;
      };
      points: Array<{
        children: Array<{
          text: string;
          type: string;
        }>;
        type: string;
      }>;
    }>;
  };
}
