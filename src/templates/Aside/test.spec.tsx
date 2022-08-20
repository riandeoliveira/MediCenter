import { render, screen } from "@testing-library/react";
import Aside from ".";

describe("Aside Template", () => {
  it("should render the Aside component", () => {
    render(
      <Aside>
        <div>Lorem Ipsum</div>
      </Aside>
    );

    expect(Aside).toBeTruthy();
  });

  it("should have an aside element", () => {
    render(
      <Aside>
        <div>Lorem Ipsum</div>
      </Aside>
    );

    const asideElement: HTMLElement = screen.getByRole("complementary");

    expect(asideElement).toBeInTheDocument();
  });
});
