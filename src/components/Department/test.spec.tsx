import { render, screen } from "@testing-library/react";
import Department from ".";

describe("Department Component", () => {
  it("should render the Department component", () => {
    render(<Department source="image" href="/" />);

    expect(Department).toBeTruthy();
  });

  it("should have a valid link", () => {
    render(<Department source="image" href="/" />);

    const link: HTMLElement = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/");
  });
});
