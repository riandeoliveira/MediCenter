import { render, screen, within } from "@testing-library/react";
import Banner from ".";

describe("Banner Template", () => {
  it("should render the Banner component", () => {
    render(<Banner />);

    expect(Banner).toBeTruthy();
  });

  it("should have the correct title", () => {
    render(<Banner />);

    const title: string | null = screen.getByRole("heading", {
      level: 2,
    }).textContent;

    expect(title).toEqual("Top notch  experience");
  });

  it("should have three banner cards", () => {
    render(<Banner />);

    const titlesLength: number = screen.getAllByRole("heading", {
      level: 3,
    }).length;

    expect(titlesLength).toEqual(3);
  });

  it("should have three list items inside the last banner card", () => {
    render(<Banner />);

    const listElement: HTMLElement = screen.getByRole("list");
    const listItemsLength: number =
      within(listElement).getAllByRole("listitem").length;

    expect(listItemsLength).toEqual(3);
  });
});
