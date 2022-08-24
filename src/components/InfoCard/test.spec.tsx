import { render, screen } from "@testing-library/react";
import InfoCard from ".";

describe("InfoCard Component", () => {
  it("should render the InfoCard component", () => {
    render(
      <InfoCard label="Lorem Ipsum" theme="neutral">
        Content
      </InfoCard>
    );

    expect(InfoCard).toBeTruthy();
  });

  it("should have a level three heading", () => {
    render(
      <InfoCard label="Lorem Ipsum" theme="neutral">
        Content
      </InfoCard>
    );

    const heading: HTMLElement = screen.getByRole("heading", { level: 3 });

    expect(heading).toBeInTheDocument();
  });
});
