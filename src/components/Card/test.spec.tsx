import { render, screen } from "@testing-library/react";
import Card from ".";

describe("Card Component", () => {
  it("should render the Card component", () => {
    render(<Card id={0} type="summary" title="title" />);

    expect(Card).toBeTruthy();
  });

  it("should be of summary type", () => {
    render(<Card id={0} type="summary" title="title" />);

    const linkButton: HTMLElement = screen.getByRole("link");
    const listElement: HTMLElement | null = screen.queryByRole("list");

    expect(linkButton).toBeInTheDocument();
    expect(listElement).not.toBeInTheDocument();
  });

  it("should be of schedule type", () => {
    render(<Card id={0} type="schedule" title="title" />);

    const listElement: HTMLElement = screen.getByRole("list");
    const linkButton: HTMLElement | null = screen.queryByRole("link");

    expect(listElement).toBeInTheDocument();
    expect(linkButton).not.toBeInTheDocument();
  });
});
