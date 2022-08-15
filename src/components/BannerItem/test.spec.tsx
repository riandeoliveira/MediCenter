import { render, screen } from "@testing-library/react";
import BannerItem from ".";

describe("BannerItem Component", () => {
  it("should render the BannerItem component", () => {
    render(<BannerItem id={0} type="summary" title="" />);

    expect(BannerItem).toBeTruthy();
  });

  it("should be of summary type", () => {
    render(<BannerItem id={0} type="summary" title="" />);

    const linkButton: HTMLElement = screen.getByRole("link");
    const listElement: HTMLElement | null = screen.queryByRole("list");

    expect(linkButton).toBeInTheDocument();
    expect(listElement).not.toBeInTheDocument();
  });

  it("should be of schedule type", () => {
    render(<BannerItem id={0} type="schedule" title="" />);

    const listElement: HTMLElement = screen.getByRole("list");
    const linkButton: HTMLElement | null = screen.queryByRole("link");

    expect(listElement).toBeInTheDocument();
    expect(linkButton).not.toBeInTheDocument();
  });
});
