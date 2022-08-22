import { render } from "@testing-library/react";
import LatestPosts from ".";

describe("LatestPosts Template", () => {
  it("should render the LatestPosts component", () => {
    render(<LatestPosts />);

    expect(LatestPosts).toBeTruthy();
  });
});
