export interface ICard {
  description: string;
  label: string;
  theme: "light" | "neutral" | "dark";
}

export interface INewsPost {
  href: string;
  date: string;
  comments: number;
  image: string;
  title: string;
  content: string;
}
