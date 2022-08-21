import { render, screen, within } from "@testing-library/react";
import Appoitments from ".";

describe("Appointments Template", () => {
  it("should render the Appointments component", () => {
    render(<Appoitments />);

    expect(Appoitments).toBeTruthy();
  });

  it("should have three list items", () => {
    render(<Appoitments />);

    const listItems: HTMLElement[] = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(3);
  });

  it("should have a valid email link", () => {
    render(<Appoitments />);

    const listItem: HTMLElement = screen.getAllByRole("listitem")[1];
    const linkElement: HTMLElement = within(listItem).getByRole("link");
    const isValidLink: boolean | undefined = linkElement
      .getAttribute("href")
      ?.startsWith("mailto:");

    expect(isValidLink).toBeTruthy();
  });
});
