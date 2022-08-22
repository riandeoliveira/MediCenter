import { render } from "@testing-library/react";
import TweetPost from ".";

describe("TweetPost Component", () => {
  it("should render the TweetPost component", () => {
    render(<TweetPost content="Lorem Ipsum" date="1 day ago" origin="/" />);

    expect(TweetPost).toBeTruthy();
  });
});
