import { render, screen } from "@testing-library/react";
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
});
