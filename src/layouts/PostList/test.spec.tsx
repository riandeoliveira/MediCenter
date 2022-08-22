import { render } from "@testing-library/react";
import PostList from ".";

describe("PostList Layout", () => {
  it("should render the PostList component", () => {
    render(<PostList />);

    expect(PostList).toBeTruthy();
  });
});
