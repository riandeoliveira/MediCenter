import { render } from "@testing-library/react";
import NewsPostList from ".";

describe("NewsPostList Layout", () => {
  it("should render the NewsPostList component", () => {
    render(<NewsPostList />);

    expect(NewsPostList).toBeTruthy();
  });
});
