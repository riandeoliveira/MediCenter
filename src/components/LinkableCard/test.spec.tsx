import { render, screen } from "@testing-library/react";
import LinkableCard from ".";

describe("LinkableCard Component", () => {
  it("should render the LinkableCard component", () => {
    render(
      <LinkableCard label="Lorem Ipsum" theme="neutral">
        Content
      </LinkableCard>
    );

    expect(LinkableCard).toBeTruthy();
  });

  it("should have a level three heading", () => {
    render(
      <LinkableCard label="Lorem Ipsum" theme="neutral">
        Content
      </LinkableCard>
    );

    const heading: HTMLElement = screen.getByRole("heading", { level: 3 });

    expect(heading).toBeInTheDocument();
  });

  it("should have a link element with the text 'READ MORE'", () => {
    render(
      <LinkableCard label="Lorem Ipsum" theme="neutral">
        Content
      </LinkableCard>
    );

    const linkElement: HTMLElement = screen.getByRole("link", {
      name: "READ MORE",
    });

    expect(linkElement).toBeInTheDocument();
  });
});
