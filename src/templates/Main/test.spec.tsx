import { render, screen } from "@testing-library/react";
import Main from ".";

describe("Main Template", () => {
  it("should render the component", () => {
    render(
      <Main>
        <div>Lorem Ipsum</div>
      </Main>
    );

    expect(Main).toBeTruthy();
  });

  it("should have a main element", () => {
    render(
      <Main>
        <div>Lorem Ipsum</div>
      </Main>
    );

    const mainElement: HTMLElement = screen.getByRole("main");

    expect(mainElement).toBeInTheDocument();
  });
});
