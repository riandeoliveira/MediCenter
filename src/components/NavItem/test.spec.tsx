import { render, screen } from "@testing-library/react";
import NavItem from ".";

describe("NavItem Component", () => {
  it("should render the NavItem component", () => {
    render(<NavItem title="title" path="/path" />);

    expect(NavItem).toBeTruthy();
  });

  it("should have a list item element", () => {
    render(<NavItem title="title" path="/path" />);

    const listItem: HTMLElement = screen.getByRole("listitem");

    expect(listItem).toBeInTheDocument();
  });

  it("should have a link element", () => {
    render(<NavItem title="title" path="/path" />);

    const link: HTMLElement = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });
});
