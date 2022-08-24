import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer Template", () => {
  it("should render the Footer component", () => {
    render(<Footer />);

    expect(Footer).toBeTruthy();
  });

  it("should have a footer element", () => {
    render(<Footer />);

    const footerElement: HTMLElement = screen.getByRole("contentinfo");

    expect(footerElement).toBeInTheDocument();
  });
});
