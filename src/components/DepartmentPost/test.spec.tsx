import { render } from "@testing-library/react";
import DepartmentPost from ".";

describe("DepartmentPost Component", () => {
  it("should render the DepartmentPost component", () => {
    render(<DepartmentPost source="image" href="/" />);

    expect(DepartmentPost).toBeTruthy();
  });
});
