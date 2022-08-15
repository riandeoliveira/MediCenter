import { render, screen } from "@testing-library/react";
import Schedule from ".";

describe("Schedule Component", () => {
  it("should render the Schedule component", () => {
    render(<Schedule days="Friday" hours="0.00 - 23.00" />);

    expect(Schedule).toBeTruthy();
  });

  it("should have a list item element", () => {
    render(<Schedule days="Friday" hours="0.00 - 23.00" />);

    const listItem: HTMLElement = screen.getByRole("listitem");

    expect(listItem).toBeInTheDocument();
  });
});
