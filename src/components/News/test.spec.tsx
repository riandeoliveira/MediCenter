import { render, screen } from "@testing-library/react";
import News from ".";

describe("News Component", () => {
  it("should render the News component", () => {
    render(
      <News
        title="Lorem Ipsum"
        content="something..."
        href="/"
        image="image"
        date="20 AUG 22"
        comments={0}
      />
    );

    expect(News).toBeTruthy();
  });

  it("should have an article element", () => {
    render(
      <News
        title="Lorem Ipsum"
        content="something..."
        href="/"
        image="image"
        date="20 AUG 22"
        comments={0}
      />
    );

    const article: HTMLElement = screen.getByRole("article");

    expect(article).toBeInTheDocument();
  });
});
