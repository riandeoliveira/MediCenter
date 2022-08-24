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

  it("should open mobile menu", () => {
    render(<Header />);

    const button: HTMLElement = screen.getByRole("button", { expanded: false });

    fireEvent.click(button);

    expect(button.getAttribute("aria-expanded")).toBeTruthy();
  });
});
