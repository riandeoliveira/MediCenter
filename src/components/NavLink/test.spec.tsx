import { render, screen } from "@testing-library/react";
import NavLink from ".";

describe("NavLink Component", () => {
  it("should render the NavLink component", () => {
    render(<NavLink title="title" path="/path" />);

    expect(NavLink).toBeTruthy();
  });

  it("should have a list item element", () => {
    render(<NavLink title="title" path="/path" />);

    const listItem: HTMLElement = screen.getByRole("listitem");

    expect(listItem).toBeInTheDocument();
  });

  it("should have a link element", () => {
    render(<NavLink title="title" path="/path" />);

    const link: HTMLElement = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });
});
