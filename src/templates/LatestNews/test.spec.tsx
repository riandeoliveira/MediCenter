import { render } from "@testing-library/react";
import LatestNews from ".";

describe("LatestNews Template", () => {
  it("should render the LatestNews component", () => {
    render(<LatestNews />);

    expect(LatestNews).toBeTruthy();
  });
});
