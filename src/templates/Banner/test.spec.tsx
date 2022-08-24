import { render, screen, within } from "@testing-library/react";
import Banner from ".";

describe("Banner Template", () => {
  it("should render the Banner component", () => {
    render(<Banner />);

    expect(Banner).toBeTruthy();
  });

  it("should have the correct title", () => {
    render(<Banner />);

    const title: HTMLElement = screen.getByRole("heading", {
      level: 2,
      name: "Top notch experience",
    });

    expect(title).toBeInTheDocument();
  });

  it("should have three banner cards", () => {
    render(<Banner />);

    const titles: HTMLElement[] = screen.getAllByRole("heading", {
      level: 3,
    });

    expect(titles).toHaveLength(3);
  });

  it("should have three list items inside the last banner card", () => {
    render(<Banner />);

    const listElement: HTMLElement = screen.getByRole("list");
    const listItems: HTMLElement[] =
      within(listElement).getAllByRole("listitem");

    expect(listItems).toHaveLength(3);
  });
});
