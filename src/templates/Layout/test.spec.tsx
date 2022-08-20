import { render, screen } from "@testing-library/react";
import Layout from ".";

describe("Layout Template", () => {
  it("should render the Layout component", () => {
    render(
      <Layout>
        <div>Lorem</div>
        <div>Ipsum</div>
      </Layout>
    );

    screen.debug();

    expect(Layout).toBeTruthy();
  });

  it("should have a div element with a 'layout' class", () => {
    render(
      <Layout>
        <div>Lorem</div>
        <div>Ipsum</div>
      </Layout>
    );

    const divElement: HTMLElement = screen.getByRole("layout");

    expect(divElement).toHaveClass("layout");
  });
});
