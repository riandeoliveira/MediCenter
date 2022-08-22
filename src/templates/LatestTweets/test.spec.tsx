import { render } from "@testing-library/react";
import LatestTweets from ".";

describe("LatestTweets Template", () => {
  it("should render the LatestTweets component", () => {
    render(<LatestTweets />);

    expect(LatestTweets).toBeTruthy();
  });
});
