export interface PortfolioFile {
  slug: string;
  title: string;
  description: string;
  fileName: string;
}

export const portfolioFiles: PortfolioFile[] = [
  {
    slug: "ui-ux",
    title: "UI/UX Design Portfolio",
    description:
      "A collection of my digital product design work including MediPlus and enterprise systems.",
    fileName: "UI UX portfolio.pdf",
  },
  {
    slug: "urban-design",
    title: "Urban Design Portfolio",
    description:
      "Urban renewal, master planning, and community design projects from Hongkong.",
    fileName: "UD Portfolio.pdf",
  },
];
