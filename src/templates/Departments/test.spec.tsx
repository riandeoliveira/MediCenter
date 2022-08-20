import { render } from "@testing-library/react";
import Departments from ".";

describe("Departments Template", () => {
  it("should render the Departments component", () => {
    render(<Departments />);

    expect(Departments).toBeTruthy();
  });
});
