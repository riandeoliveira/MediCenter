import { render, screen } from "@testing-library/react";
import type { INewsPost } from "interfaces";
import NewsPost from ".";

describe("NewsPost Component", () => {
  it("should render the NewsPost component", () => {
    const data: INewsPost = {
      title: "Lorem Ipsum",
      content: "something...",
      href: "/",
      image: "image",
      date: "20 AUG 22",
      comments: 0,
    };

    render(<NewsPost {...data} />);

    expect(NewsPost).toBeTruthy();
  });

  it("should have an article element", () => {
    const data: INewsPost = {
      title: "Lorem Ipsum",
      content: "something...",
      href: "/",
      image: "image",
      date: "20 AUG 22",
      comments: 0,
    };

    render(<NewsPost {...data} />);

    const article: HTMLElement = screen.getByRole("article");

    expect(article).toBeInTheDocument();
  });
});
