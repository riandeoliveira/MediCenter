import { render } from "@testing-library/react";
import DepartmentPostList from ".";

describe("DepartmentPostList Layout", () => {
  it("should render the DepartmentPostList component", () => {
    render(<DepartmentPostList />);

    expect(DepartmentPostList).toBeTruthy();
  });
});
