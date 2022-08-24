import { render } from "@testing-library/react";
import Post from ".";

describe("Post Component", () => {
  it("should render the Post component", () => {
    render(<Post content="Lorem Ipsum" date="1 day ago" origin="/" />);

    expect(Post).toBeTruthy();
  });
});
