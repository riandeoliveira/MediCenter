import { render } from "@testing-library/react";
import TweetPostList from ".";

describe("TweetPostList Layout", () => {
  it("should render the TweetPostList component", () => {
    render(<TweetPostList />);

    expect(TweetPostList).toBeTruthy();
  });
});
