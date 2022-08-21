import { render, screen } from "@testing-library/react";
import NavLinkList from ".";

describe("NavLinkList Layout", () => {
  it("should render the NavLinkList component", () => {
    render(<NavLinkList />);

    expect(NavLinkList).toBeTruthy();
  });

  it("should have all the eight nav links", () => {
    render(<NavLinkList />);

    const listItems: HTMLElement[] = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(8);
  });
});
