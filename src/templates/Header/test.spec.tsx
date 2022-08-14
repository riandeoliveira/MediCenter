import { fireEvent, render, screen } from "@testing-library/react";
import Header from ".";

describe("Header Template", () => {
  it("should render the Header component", () => {
    render(<Header />);

    expect(Header).toBeTruthy();
  });

  it("should contain the website name", () => {
    render(<Header />);

    const websiteName: HTMLElement = screen.getByRole("heading", {
      level: 1,
      name: "MediCenter",
    });

    expect(websiteName).toBeInTheDocument();
  });

  it("should have all the eight nav links", () => {
    render(<Header />);

    const listItems: HTMLElement[] = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(8);
  });

  it("should open mobile menu", () => {
    render(<Header />);

    const button = screen.getByRole("button", { expanded: false });

    fireEvent.click(button);

    expect(button.getAttribute("aria-expanded")).toBeTruthy();
  });
});
