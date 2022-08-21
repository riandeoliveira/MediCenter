import { render, screen } from "@testing-library/react";
import InfoCardList from ".";

describe("InfoCardList Layout", () => {
  it("should render the InfoCardList component", () => {
    render(<InfoCardList />);

    expect(InfoCardList).toBeTruthy();
  });

  it("should have three footer cards", () => {
    render(<InfoCardList />);

    const titles: HTMLElement[] = screen.getAllByRole("heading", {
      level: 3,
    });

    expect(titles).toHaveLength(3);
  });
});
