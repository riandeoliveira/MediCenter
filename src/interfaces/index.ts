export interface ICard {
  description: string;
  label: string;
  theme: "light" | "neutral" | "dark";
}

export interface INewsPost {
  comments: number;
  content: string;
  date: string;
  href: string;
  image: string;
  title: string;
}

export interface IFooterPost {
  content: string;
  date: string;
  origin: string;
}
