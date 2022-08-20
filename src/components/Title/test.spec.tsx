import { render, screen } from "@testing-library/react";
import Title from ".";

describe("Title Component", () => {
  it("should render the Title component", () => {
    render(<Title name="Lorem Ipsum" theme="dark" />);

    expect(Title).toBeTruthy();
  });

  it("should have a level two heading", () => {
    render(<Title name="Lorem Ipsum" theme="dark" />);

    const heading: HTMLElement = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });

  it("should have a dark heading", () => {
    render(<Title name="Lorem Ipsum" theme="dark" />);

    const heading: HTMLElement = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveClass("dark");
  });

  it("should have a light heading", () => {
    render(<Title name="Lorem Ipsum" theme="light" />);

    const heading: HTMLElement = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveClass("light");
  });
});
